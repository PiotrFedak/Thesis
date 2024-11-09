<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testRegisterUser(): void
    {
        $response = $this->postJson("/api/register", [
            "name" => "Test User",
            "email" => "test@wp.pl",
            "password" => "password123",
            "password_confirmation" => "password123",
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas("users", ["email" => "test@wp.pl"]);
        $response->assertJsonStructure([
            "user" => [
                "id", "name", "email", "created_at", "updated_at",
            ],
            "token",
        ]);
    }

    public function testRegisterWithExistingEmail(): void
    {
        User::factory()->create([
            "email" => "test@wp.pl",
            "isAdmin" => false,
        ]);

        $response = $this->postJson("/api/register", [
            "name" => "Another User",
            "email" => "test@wp.pl",
            "password" => "password123",
            "password_confirmation" => "password123",
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(["email"]);
    }

    public function testLoginUser(): void
    {
        User::factory()->create([
            "email" => "test@wp.pl",
            "password" => Hash::make("password123"),
            "isAdmin" => false,
        ]);

        $response = $this->postJson("/api/login", [
            "email" => "test@wp.pl",
            "password" => "password123",
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure(["user", "token"]);
    }

    public function testFailedLoginWithInvalidCredentials(): void
    {
        User::factory()->create([
            "email" => "email@example.com",
            "password" => bcrypt("password@example"),
            "isAdmin" => false,
        ]);

        $response = $this->postJson("/api/login", [
            "email" => "email@example.com",
            "password" => "wrongpassword",
        ]);

        $response->assertStatus(200);
        $response->assertJson([
            "message" => "Something went wrong",
        ]);
    }    

    public function testLogoutUser(): void
    {
        $user = User::factory()->create(["isAdmin" => false]);
        $token = $user->createToken("TestToken")->plainTextToken;

        $response = $this->withHeaders(["Authorization" => "Bearer $token"])
            ->postJson("/api/logout");

        $response->assertStatus(204);
    }

    public function testFailedLogoutWithoutToken(): void
    {
        $response = $this->postJson("/api/logout");

        $response->assertStatus(401);
        $response->assertJson(["message" => "Unauthenticated."]);
    }
    public function testRegisterWithInvalidEmailFormat(): void
    {
        $response = $this->postJson("/api/register", [
            "name" => "Test User",
            "email" => "invalid-email-format",
            "password" => "password123",
            "password_confirmation" => "password123",
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(["email"]);
    }

    public function testLoginWithoutPassword(): void
    {
        User::factory()->create([
            "email" => "test@example.com",
            "password" => bcrypt("password123"),
            "isAdmin" => false,
        ]);

        $response = $this->postJson("/api/login", [
            "email" => "test@example.com",
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(["password"]);
    }

    public function testRegisterWithMismatchedPasswordConfirmation(): void
    {
        $response = $this->postJson("/api/register", [
            "name" => "Test User",
            "email" => "test@example.com",
            "password" => "password123",
            "password_confirmation" => "differentpassword",
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(["password"]);
    }
}
