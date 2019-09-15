<?php

namespace App\Http\Middleware;
use Closure;

class Permissive {
   public function handle($request, Closure $next, $roles) {
     $user = $request->user();

     if( in_array($user->role , $roles) ) {
       abort(403);
     }

      return $next($request);
   }
}
