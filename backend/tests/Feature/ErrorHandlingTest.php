<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ErrorHandlingTest extends TestCase
{
    use RefreshDatabase;

    public function testNonExistentEndpoint()
    {
        $response = $this->getJson('/api/nonexistent-endpoint');

        $response->assertStatus(404);
        $response->assertJsonStructure([
            'message', 'exception', 'file', 'line'
        ]);
        $this->assertStringContainsString('could not be found', $response->json('message'));
    }

    public function testUnauthorizedError()
    {
        $response = $this->getJson('/api/favorites');

        $response->assertStatus(401);
        $response->assertJson([
            'message' => 'Unauthenticated.',
        ]);
    }

    public function testValidationError()
    {
        $response = $this->postJson('/api/register', [
            'name' => '',
            'email' => 'email',
            'password' => '123',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['name', 'email', 'password']);
    }
}
