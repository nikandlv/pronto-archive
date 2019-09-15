<?php

namespace App\Http\Controllers;

use App\Traits\PassportToken;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;


class AuthController extends Controller {

    use PassportToken;

    function Signup(Request $request) {
        
    }
    
    function Signin(Request $request) {
        
    }

    function Signout(Request $request) {
        
    }

    function refresh(Request $request) {
        
    }

}