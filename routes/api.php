<?php

use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
//
//Route::middleware(['auth:api','permissive:admin'])->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['prefix' => '/auth'] , function () {
    Route::post('signin' , 'AuthController@signin');
    Route::post('signup' , 'AuthController@signup');
});

Route::group(['prefix' => 'auth' , 'middleware' => 'auth:api'] , function () {
    Route::get('signout' , 'AuthController@signout');
    Route::get('user' , 'AuthController@user');
});
Route::group( ['prefix' => '/user' , 'middleware' =>['auth:api', 'permissive']], function () {
    // ADMIN USERS ONLY

    // get list of all users
     Route::get('/user/list' , 'UserController@index');

    // get a specific user
    Route::get('{id}' , 'UserController@show');

    // create a new user
    Route::post('' , 'UserController@store');

    // update a specific user
    Route::patch('{id}' , 'UserController@update');

    // delete a user
    Route::delete('{id}' , 'UserController@destroy');
});

