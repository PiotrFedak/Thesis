<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class TeamHelperTest extends TestCase
{
    public function testFilterTeamsByConference()
    {
        $teams = [
            ['id' => 1, 'name' => 'Lakers', 'conference' => 'West'],
            ['id' => 2, 'name' => 'Celtics', 'conference' => 'East'],
            ['id' => 3, 'name' => 'Warriors', 'conference' => 'West'],
        ];

        $westTeams = array_filter($teams, function ($team) {
            return $team['conference'] === 'West';
        });

        $this->assertCount(2, $westTeams);
        $this->assertEquals('Lakers', array_values($westTeams)[0]['name']);
        $this->assertEquals('Warriors', array_values($westTeams)[1]['name']);
    }

    public function testFormatTeamNames()
    {
        $teams = [
            ['id' => 1, 'name' => 'Los Angeles Lakers'],
            ['id' => 2, 'name' => 'Boston Celtics'],
        ];

        $formattedNames = array_map(function ($team) {
            return strtoupper($team['name']);
        }, $teams);

        $this->assertEquals('LOS ANGELES LAKERS', $formattedNames[0]);
        $this->assertEquals('BOSTON CELTICS', $formattedNames[1]);
    }
}
