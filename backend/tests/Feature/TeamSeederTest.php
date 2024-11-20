<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Team;
use Database\Seeders\TeamSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TeamSeederTest extends TestCase
{
    use RefreshDatabase;

    public function testSeededTeamsHaveCorrectData(): void
    {
        $this->seed(TeamSeeder::class);

        $seededTeams = Team::all();

        $this->assertGreaterThan(0, $seededTeams->count(), "No teams were seeded.");
        $this->assertCount(30, $seededTeams, "The number of seeded teams is not 30. Something is wrong");

        foreach ($seededTeams as $team) {
            $this->assertIsInt($team->team_id, "The team_id for {$team->name} is not an integer.");
            $this->assertNotEmpty($team->name, "The name field for team {$team->name} is empty");
            $this->assertNotEmpty($team->city, "The city field for team {$team->name} is empty");
            $this->assertContains($team->conference, ["West", "East"], "The conference for {$team->name} is invalid");
            $this->assertNotEmpty($team->division, "The division field for team {$team->name} is empty");
            $this->assertNotEmpty($team->address, "The address field for team {$team->name} is empty");
            $this->assertNotEmpty($team->icon_url, "The icon_url field for team {$team->name} is empty.");
            $this->assertStringEndsWith(".png", $team->icon_url, "The icon_url for team {$team->name} is not a file with extension .png");

            $this->assertJson($team->location, "The location field for team {$team->name} is not a valid JSON string.");
            $decodedLocation = json_decode($team->location, true);
            $this->assertIsArray($decodedLocation, "The location field for team {$team->name} is not an array.");
            $this->assertCount(2, $decodedLocation, "The location field for team {$team->name} does not contain one of the location");
            $this->assertIsFloat($decodedLocation[0], "Latitude for team {$team->name} is not a float.");
            $this->assertIsFloat($decodedLocation[1], "Longitude for team {$team->name} is not a float.");
        }
    }

    public function testDatabaseHasAllSeededTeams(): void
    {
        $this->seed(TeamSeeder::class);

        $expectedTeams = [
            ["name" => "Atlanta Hawks", "team_id" => 1, "city" => "Atlanta"],
            ["name" => "Boston Celtics", "team_id" => 2, "city" => "Boston"],
            ["name" => "Brooklyn Nets", "team_id" => 3, "city" => "Brooklyn"],
            ["name" => "Charlotte Hornets", "team_id" => 4, "city" => "Charlotte"],
            ["name" => "Chicago Bulls", "team_id" => 5, "city" => "Chicago"],
            ["name" => "Cleveland Cavaliers", "team_id" => 6, "city" => "Cleveland"],
            ["name" => "Dallas Mavericks", "team_id" => 7, "city" => "Dallas"],
            ["name" => "Denver Nuggets", "team_id" => 8, "city" => "Denver"],
            ["name" => "Detroit Pistons", "team_id" => 9, "city" => "Detroit"],
            ["name" => "Golden State Warriors", "team_id" => 10, "city" => "San Francisco"],
            ["name" => "Houston Rockets", "team_id" => 11, "city" => "Houston"],
            ["name" => "Indiana Pacers", "team_id" => 12, "city" => "Indianapolis"],
            ["name" => "Los Angeles Clippers", "team_id" => 13, "city" => "Los Angeles"],
            ["name" => "Los Angeles Lakers", "team_id" => 14, "city" => "Los Angeles"],
            ["name" => "Memphis Grizzlies", "team_id" => 15, "city" => "Memphis"],
            ["name" => "Miami Heat", "team_id" => 16, "city" => "Miami"],
            ["name" => "Milwaukee Bucks", "team_id" => 17, "city" => "Milwaukee"],
            ["name" => "Minnesota Timberwolves", "team_id" => 18, "city" => "Minneapolis"],
            ["name" => "New Orleans Pelicans", "team_id" => 19, "city" => "New Orleans"],
            ["name" => "New York Knicks", "team_id" => 20, "city" => "New York"],
            ["name" => "Oklahoma City Thunder", "team_id" => 21, "city" => "Oklahoma City"],
            ["name" => "Orlando Magic", "team_id" => 22, "city" => "Orlando"],
            ["name" => "Philadelphia 76ers", "team_id" => 23, "city" => "Philadelphia"],
            ["name" => "Phoenix Suns", "team_id" => 24, "city" => "Phoenix"],
            ["name" => "Portland Trail Blazers", "team_id" => 25, "city" => "Portland"],
            ["name" => "Sacramento Kings", "team_id" => 26, "city" => "Sacramento"],
            ["name" => "San Antonio Spurs", "team_id" => 27, "city" => "San Antonio"],
            ["name" => "Toronto Raptors", "team_id" => 28, "city" => "Toronto"],
            ["name" => "Utah Jazz", "team_id" => 29, "city" => "Salt Lake City"],
            ["name" => "Washington Wizards", "team_id" => 30, "city" => "Washington"],
        ];

        foreach ($expectedTeams as $expectedTeam) {
            $this->assertDatabaseHas("teams", $expectedTeam);
        }
    }
}
