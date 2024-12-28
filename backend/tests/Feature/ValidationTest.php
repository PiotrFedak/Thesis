<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ValidationTest extends TestCase
{
    use RefreshDatabase;

    public function testTeamsEndpointReturnsData()
    {
        $response = $this->getJson('/api/teams');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => ['id', 'full_name'],
        ]);
    }

    public function testFavoritesToggleFailsWithoutAuth()
    {
        $response = $this->postJson('/api/favorites/toggle', [
            'team_id' => 1,
        ]);

        $response->assertStatus(401);
    }

    public function testFavoritesToggleFailsWithInvalidData()
    {
        $user = \App\Models\User::factory()->create();
        $this->actingAs($user, 'sanctum');

        $response = $this->postJson('/api/favorites/toggle', [
            'team_id' => 'invalid',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['team_id']);
    }

    public function testFavoritesTogglePassesWithValidData()
    {
        $user = \App\Models\User::factory()->create();
        $this->actingAs($user, 'sanctum');

        $response = $this->postJson('/api/favorites/toggle', [
            'team_id' => 1,
        ]);

        $response->assertStatus(200);
    }
}
