<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthenticationSystemTest extends TestCase
{
    use RefreshDatabase;
    /** @test **/
    public function a_guest_can_sign_up_and_then_get_bearer_token()
    {
        $this->withoutExceptionHandling();
//        given : we have a guest that wants to signup in the system
        $user = factory(User::class)->create();

//        when : user sends request to /signup


        $this->post('/api/auth/signup',[
            'name' => $user->name,
            'username' => $user->username,
            'email' => $user->email,
            'password' => $user->password
        ])->assertStatus(201);
    }
}
