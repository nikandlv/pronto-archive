<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseBuilder;
use App\Traits\PassportToken;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {

    use PassportToken;

    function Signup(Request $request) {

    }
    
    function Signin(Request $request) {
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
        return ResponseBuilder::build('response.SUCCESS',null,
            $authorization
        ,200);
    }

    function Signout(Request $request) {
        
    }

    function refresh(Request $request) {

    }

}