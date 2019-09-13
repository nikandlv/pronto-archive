<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsersResource;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
//        getting all users without pagination
        $users = User::all();

//        returning users as a resource
        return UsersResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return UsersResource
     */
    public function store(Request $request, User $user)
    {
//        validating the request
        $attributes = $request->validate([
            'name' => 'required|min:5',
            'username' => 'required|min:4|max:35',
            'email' => 'required',
            'password' => 'required|min:5|max:255',
            'role' => 'required'
        ]);

//        creating the user
        $user->name = $attributes['name'];
        $user->username = $attributes['username'];
        $user->email = $attributes['email'];
        $user->password = $attributes['password'];
        $user->role = $attributes['role'];

//      saving and returning a resource
        if ($user->save()) {
            return new UsersResource($user);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
//        getting the user
        $user = User::findOrFail($id);

//        returning user as a resource
        return new UsersResource($user);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return UsersResource
     */
    public function update(Request $request, $id)
    {
//        validate request
        $attributes = $request->validate([
            'name' => 'required|min:5',
            'username' => 'required|min:4|max:35',
            'email' => 'required',
            'password' => 'required|min:5|max:255',
            'role' => 'required'
        ]);

//        getting user
        $user = User::findOrFail($id);

//        updating fields
        $user->name = $attributes['name'];
        $user->username = $attributes['username'];
        $user->email = $attributes['email'];
        $user->password = $attributes['password'];
        $user->role = $attributes['role'];

//        saving changes and returning User resource
        if ($user->save()) {
            return new UsersResource($user);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return UsersResource
     */
    public function destroy($id)
    {
//        getting the user
        $user = User::findOrFail($id);

//        deleting the user
        if ($user->delete()) {
            return new UsersResource($user);
        }
    }
}
