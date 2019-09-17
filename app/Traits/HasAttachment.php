<?php
namespace App\Traits;

use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class HasAttachment {
  function store($file) {
    $date = Carbon::now();
    $uuid = (string) Str::uuid();
  }
  function retrive($name) {
    
  }
  function delete($name) {
  }
}