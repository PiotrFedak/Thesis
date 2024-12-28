<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TeamListTest extends TestCase
{
    use RefreshDatabase;

    public function testTeamsEndpointReturnsData()
    {
        $response = $this->getJson('/api/teams');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => [
                'id',
                'full_name',
                'city',
                'abbreviation',
            ],
        ]);
    }

    public function testTeamsEndpointReturnsEmptyArrayIfNoTeamsExist()
    {
        $response = $this->getJson('/api/teams');

        $response->assertStatus(200);
        $this->assertEmpty($response->json());
    }
}
