<?php

namespace App\Traits;

use App\Contracts\InternalRequest;
use App\User;
use DateTime;
use GuzzleHttp\Psr7\Response;
use Illuminate\Events\Dispatcher;
use Laravel\Passport\Bridge\AccessToken;
use Laravel\Passport\Bridge\AccessTokenRepository;
use Laravel\Passport\Bridge\Client;
use Laravel\Passport\Client as ClientModel;
use Laravel\Passport\Bridge\RefreshTokenRepository;
use Laravel\Passport\Passport;
use Laravel\Passport\TokenRepository;
use League\OAuth2\Server\CryptKey;
use League\OAuth2\Server\Entities\AccessTokenEntityInterface;
use League\OAuth2\Server\Exception\OAuthServerException;
use League\OAuth2\Server\Exception\UniqueTokenIdentifierConstraintViolationException;
use League\OAuth2\Server\ResponseTypes\BearerTokenResponse;
use GuzzleHttp\Client as GuzzleClient;

# https://github.com/laravel/passport/issues/71

/**
 * Trait PassportToken
 *
 * @package App\Traits
 */
trait PassportToken
{
    /**
     * Generate a new unique identifier.
     *
     * @param int $length
     *
     * @throws OAuthServerException
     *
     * @return string
     */
    private function generateUniqueIdentifier($length = 40)
    {
        try {
            return bin2hex(random_bytes($length));
            // @codeCoverageIgnoreStart
        } catch (\TypeError $e) {
            throw OAuthServerException::serverError('An unexpected error has occurred');
        } catch (\Error $e) {
            throw OAuthServerException::serverError('An unexpected error has occurred');
        } catch (\Exception $e) {
            // If you get this message, the CSPRNG failed hard.
            throw OAuthServerException::serverError('Could not generate a random string');
        }
        // @codeCoverageIgnoreEnd
    }

    private function issueRefreshToken(AccessTokenEntityInterface $accessToken)
    {
        $maxGenerationAttempts = 10;
        $refreshTokenRepository = app(RefreshTokenRepository::class);

        $refreshToken = $refreshTokenRepository->getNewRefreshToken();
        $refreshToken->setExpiryDateTime((new \DateTime())->add(Passport::refreshTokensExpireIn()));
        $refreshToken->setAccessToken($accessToken);

        while ($maxGenerationAttempts-- > 0) {
            $refreshToken->setIdentifier($this->generateUniqueIdentifier());
            try {
                $refreshTokenRepository->persistNewRefreshToken($refreshToken);

                return $refreshToken;
            } catch (UniqueTokenIdentifierConstraintViolationException $e) {
                if ($maxGenerationAttempts === 0) {
                    throw $e;
                }
            }
        }
    }

    private function getClient($clientId) {
        return ClientModel::find($clientId)->first();
    }

    protected function createPassportTokenByUser(User $user, $clientId){
        $accessToken = new AccessToken($user->id);
        $accessToken->setIdentifier($this->generateUniqueIdentifier());
        $accessToken->setClient(new Client($clientId, null, null));
        $accessToken->setExpiryDateTime((new DateTime())->add(Passport::tokensExpireIn()));

        $accessTokenRepository = new AccessTokenRepository(new TokenRepository(), new Dispatcher());
        $accessTokenRepository->persistNewAccessToken($accessToken);
        $refreshToken = $this->issueRefreshToken($accessToken);

        return [
            'access_token' => $accessToken,
            'refresh_token' => $refreshToken,
        ];
    }

    protected function sendBearerTokenResponse($accessToken, $refreshToken)
    {
        $response = new BearerTokenResponse();
        $response->setAccessToken($accessToken);
        $response->setRefreshToken($refreshToken);

        $privateKey = new CryptKey('file://'.Passport::keyPath('oauth-private.key'));

        $response->setPrivateKey($privateKey);
        $response->setEncryptionKey(app('encrypter')->getKey());

        return $response->generateHttpResponse(new Response);
    }

    /**
     * @param \App\Entities\User $user
     * @param $clientId
     * @param bool $output default = true
     * @return array | \League\OAuth2\Server\ResponseTypes\BearerTokenResponse
     */
    public function authorizeClient(User $user,  $output = true)
    {
        $passportToken = $this->createPassportTokenByUser($user, 1);
        $bearerToken = $this->sendBearerTokenResponse($passportToken['access_token'], $passportToken['refresh_token']);

        if (! $output) {
            $bearerToken = json_decode($bearerToken->getBody()->__toString(), true);
        }

        return $bearerToken;
    }
    public function attemptRefresh($accessToken,$refreshToken) {
        $authclient = $this->getClient(1);
        if(is_null($authclient)) {
            $error = new \stdClass();
            $error->error = 'Client not found, please make one!';
            return $error;
        }
        $response = app(InternalRequest::class)->request('POST','/oauth/token',[
            'grant_type' => 'refresh_token',
            'refresh_token' => $refreshToken,
            'client_id' => 1,
            'client_secret' => $authclient->secret
        ]);
        if($response->status() === 200) {
            return json_decode($response->content());
        } else {
            $error = new \stdClass();
            $error->error = json_decode($response->content());
            return $error;
        }
    }
}