<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testGetCurrentUserWhenAuthenticated(): void
    {
        $user = User::factory()->create(["role" => "user"]);
        $token = $user->createToken("TestToken")->plainTextToken;

        $response = $this->withHeaders(["Authorization" => "Bearer $token"])
            ->getJson("/api/getCurrentUser");

        $response->assertStatus(200)
            ->assertJson([
                "user" => [
                    "id" => $user->id,
                    "name" => $user->name,
                    "email" => $user->email,
                ],
            ]);
    }    

    public function testGetCurrentUserWhenUnauthenticated(): void
    {
        $response = $this->getJson("/api/getCurrentUser");

        $response->assertStatus(401)
            ->assertJson([
                "message" => "Unauthenticated.",
            ]);
    }
}
