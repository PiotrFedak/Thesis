<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use Tests\TestCase;

class FavoriteToggleTest extends TestCase
{
    use RefreshDatabase;

    public function testAddingToFavorites()
    {
        $user = User::factory()->create();
        $this->actingAs($user, 'sanctum');

        $response = $this->postJson('/api/favorites/toggle', [
            'team_id' => 1,
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'favorites' => []
        ]);
        $this->assertContains(1, $response->json('favorites'));
    }

    public function testAddingToFavoritesFailsForUnauthenticatedUser()
    {
        $response = $this->postJson('/api/favorites/toggle', [
            'team_id' => 1,
        ]);

        $response->assertStatus(401);
    }
}
