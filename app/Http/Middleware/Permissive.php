<?php

namespace App\Http\Middleware;
use Closure;

class Permissive {
   public function handle($request, Closure $next) {
      return $next($request);
   }
}
