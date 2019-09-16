<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseBuilder;
use App\Traits\PassportToken;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use phpseclib\Crypt\Hash;

class AuthController extends Controller {

    use PassportToken;

    /**
     * Create a new User
     *
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function signup(Request $request, User $user)
    {
//        validating the request
        $attributes = $request->validate([
            'name' => 'required|string',
            'username' => 'required|string|unique:users',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string'
        ]);

//        hashing password
        $attributes['password'] = bcrypt($attributes['password']);

//        creating the user with hashed password
        $user->name = $attributes['name'];
        $user->username = $attributes['username'];
        $user->email = $attributes['email'];
        $user->password = $attributes['password'];
        $user->role = 'USER'; /*by default role must be set to user */

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
     * @return bool
     */
    public function signin(Request $request) {
//        validating request
        $credentials = $request->validate([
            'email' => 'sometimes|string',
            'username' => 'sometimes|string',
            'password' => 'required|string'
        ]);

//        checking for wrong credentials
        if(!Auth::attempt($credentials)) {
            return ResponseBuilder::build('Wrong credentials',null,null, 401);
        }

//        getting user
        $user = $request->user();

        $authorization = $this->authorizeClient($user, false);

        $authorization['expires_in'] = Carbon::now()->addSeconds($authorization['expires_in']);

//        return access token
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
//        revoke access token
        $request->user()->token()->revoke();

//        return logout response
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

