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

// USERS
// get list of all users
Route::get('/users' , 'UserController@index');

// get a specific user
Route::get('/user/{id}' , 'UserController@show');

// create a new user
Route::post('/user' , 'UserController@store');

// update a specific user
Route::put('/user' , 'UserController@update');

// delete a user
Route::delete('/user' , 'UserController@destroy');
