<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseBuilder;
use App\Traits\PassportToken;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {

    use PassportToken;

    public function signup(Request $request, User $user)
    {
//        validating the requs
        $attributes = $request->validate([
            'name' => 'required|string',
            'username' => 'required|string|unique:users',
            'email' => 'required|string|email|unique:users',
            'password' => 'required'
        ]);

//        creating the user
        $user->name = $attributes['name'];
        $user->username = $attributes['username'];
        $user->email = $attributes['email'];
        $user->password = $attributes['password'];

//        saving model
        if($user->save()) {
            return response()->json([
                'message' => 'User Created Successfully'
            ], 201);
        }
    }

    /**
     * sign in user and create token
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signin(Request $request) {
        $credentials = $request->validate([
            'email' => 'sometimes|string',
            'username' => 'sometimes|string',
            'password' => 'required|string'
        ]);

        if(!Auth::attempt($credentials))
            return ResponseBuilder::build('Wrong credentials',null,null, 401);

        $user = $request->user();

        $authorization = $this->authorizeClient($user, false);

        $authorization['expires_in'] = Carbon::now()->addSeconds($authorization['expires_in']);

        return ResponseBuilder::build('Success!',null,
            $authorization
        ,200);
    }

    /**
     * sign out user and revoke token
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signout(Request $request) {
        $request->user()->token()->revoke();
        return ResponseBuilder::build('response.LOGOUT',null,null,200);
    }

    /**
     * generate a new access token
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh(Request $request) {
        $refresh_token = $request->header('refresh_token');
        $access_token = $request->header('Authorization');

        if(empty($refresh_token)) {
            return ResponseBuilder::build('Failed',null,[
                'error' => 'refresh_token is required'
            ],422);
        }
        if(empty($access_token)) {
            return ResponseBuilder::build('Failed',null,[
                'error' => 'Authorization is required'
            ],401);
        }

        $access_token = str_replace('Bearer ','',$access_token);

        $data = $this->attemptRefresh($access_token,$refresh_token);

        if(isset($data->error)) {
            return ResponseBuilder::build('Failed',null,[
                'error' => $data->error
            ],422);
        }

        $data->expires_in = Carbon::now()->addSeconds($data->expires_in)->timestamp;
        return ResponseBuilder::build('Success!',null,$data,200);
    }

    /**
     * get authenticated user
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
