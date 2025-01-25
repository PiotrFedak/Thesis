<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AdminMiddlewareTest extends TestCase
{
    use RefreshDatabase;

    public function testAdminCanAccessAdminRoutes()
    {
        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
        ]);

        $this->actingAs($admin, 'sanctum');

        $response = $this->getJson('/api/users');
        $response->assertStatus(200);
    }

    public function testNonAdminCannotAccessAdminRoutes()
    {
        $user = User::create([
            'name' => 'User',
            'email' => 'user@example.com',
            'password' => Hash::make('password'),
            'role' => 'user',
        ]);

        $this->actingAs($user, 'sanctum');

        $response = $this->getJson('/api/users');
        $response->assertStatus(302);
    }

    public function testGuestCannotAccessAdminRoutes()
    {
        $response = $this->getJson('/api/users');
        $response->assertStatus(401);
    }

    public function testAdminCanCreateUser()
    {
        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
        ]);

        $this->actingAs($admin, 'sanctum');

        $response = $this->postJson('/api/users', [
            'name' => 'User',
            'email' => 'newuser@example.com',
            'password' => 'newpassword',
            'role' => 'user',
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('users', [
            'email' => 'newuser@example.com',
        ]);
    }

    public function testAdminCanDeleteUser()
    {
        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
        ]);

        $user = User::create([
            'name' => 'User123',
            'email' => 'delete@example.com',
            'password' => Hash::make('password'),
            'role' => 'user',
        ]);

        $this->actingAs($admin, 'sanctum');

        $response = $this->deleteJson("/api/users/{$user->id}");

        $response->assertStatus(200);
        $this->assertDatabaseMissing('users', [
            'email' => 'delete@example.com',
        ]);
    }

    public function testAdminCanUpdateUser()
    {
        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
        ]);

        $user = User::create([
            'name' => 'Old Name',
            'email' => 'oldname@example.com',
            'password' => Hash::make('password'),
            'role' => 'user',
        ]);

        $this->actingAs($admin, 'sanctum');

        $response = $this->putJson("/api/users/{$user->id}", [
            'name' => 'Updated Name',
            'email' => 'updated@example.com',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('users', [
            'name' => 'Updated Name',
            'email' => 'updated@example.com',
        ]);
    }
}
