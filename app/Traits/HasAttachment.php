<?php
namespace App\Traits;

use Illuminate\Support\Carbon;

class HasAttachment {
  function store($file) {
    $date = Carbon::now();
  }
  function retrive($name) {
    
  }
  function delete($name) {
  }
}