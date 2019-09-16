<?php
namespace App\Helpers;

class ResponseBuilder {

    static public function build($code, $params, $data, $status, $lang='fa')
    {
        if(is_null($params)) {
            $params = [];
        }

        if(is_null($data)) {
            return response()->json([
                "message" => trans($code, $params, $lang),
            ],$status);
        }

       return response()->json($data, $status);
    }
}
