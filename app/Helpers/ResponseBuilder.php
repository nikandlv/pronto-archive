<?php
namespace App\Helpers;

class ResponseBuilder {

    static public function build($code,$params,$data,$status,$lang='fa') {
        if(is_null($params)) {
            $params = [];
        }
        $responseStatus = false;
        if($status >= 200 && $status < 400){
            $responseStatus = true;
        }
       return response()->json([ 
           "message" => trans($code, $params, $lang),
           "data" => $data,
           "status" => $responseStatus
       ],$status);
    }
 
}