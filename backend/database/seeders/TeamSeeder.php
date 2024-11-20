<?php

declare(strict_types=1);

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $teams = [
            [
                "team_id" => 8,
                "location" => json_encode([39.74867266532661, -105.007597732176]),
                "name" => "Denver Nuggets",
                "city" => "Denver",
                "conference" => "West",
                "division" => "Northwest",
                "address" => "1000 Chopper Cir, Denver, CO 80204",
                "icon_url" => "nuggets.png",
            ],
            [
                "team_id" => 17,
                "location" => json_encode([43.04509199922204, -87.91734850425911]),
                "name" => "Milwaukee Bucks",
                "city" => "Milwaukee",
                "conference" => "East",
                "division" => "Central",
                "address" => "1111 N Vel R. Phillips Ave, Milwaukee, WI 53203",
                "icon_url" => "Bucks.png",
            ],
            [
                "team_id" => 28,
                "location" => json_encode([43.64349220962489, -79.37909562710226]),
                "name" => "Toronto Raptors",
                "city" => "Toronto",
                "conference" => "East",
                "division" => "Atlantic",
                "address" => "40 Bay St., Toronto, ON M5J 2X2",
                "icon_url" => "Raptors.png",
            ],
            [
                "team_id" => 2,
                "location" => json_encode([42.36619542101667, -71.06215831120917]),
                "name" => "Boston Celtics",
                "city" => "Boston",
                "conference" => "East",
                "division" => "Atlantic",
                "address" => "100 Legends Way, Boston, MA 02114",
                "icon_url" => "Celtics.png",
            ],
            [
                "team_id" => 14,
                "location" => json_encode([34.04312667072381, -118.26702563097173]),
                "name" => "Los Angeles Lakers",
                "city" => "Los Angeles",
                "conference" => "West",
                "division" => "Pacific",
                "address" => "1111 S Figueroa St, Los Angeles, CA 90015",
                "icon_url" => "Lakers.png",
            ],
            [
                "team_id" => 20,
                "location" => json_encode([40.75071835493097, -73.99242633451308]),
                "name" => "New York Knicks",
                "city" => "New York",
                "conference" => "East",
                "division" => "Atlantic",
                "address" => "New York, NY 10001",
                "icon_url" => "Knicks.png",
            ],
            [
                "team_id" => 1,
                "location" => json_encode([33.75764248778137, -84.3961416641311]),
                "name" => "Atlanta Hawks",
                "city" => "Atlanta",
                "conference" => "East",
                "division" => "Southeast",
                "address" => "1 State Farm Dr, Atlanta, GA 30303",
                "icon_url" => "Hawks.png",
            ],
            [
                "team_id" => 30,
                "location" => json_encode([38.898179390003634, -77.02084624847794]),
                "name" => "Washington Wizards",
                "city" => "Washington",
                "conference" => "East",
                "division" => "Southeast",
                "address" => "601 F St NW, Washington, DC 20004",
                "icon_url" => "Wizards.png",
            ],
            [
                "team_id" => 9,
                "location" => json_encode([42.341494362661955, -83.0551519622027]),
                "name" => "Detroit Pistons",
                "city" => "Detroit",
                "conference" => "East",
                "division" => "Central",
                "address" => "2645 Woodward Ave, Detroit, MI 48201",
                "icon_url" => "Pistons.png",
            ],
            [
                "team_id" => 19,
                "location" => json_encode([29.94922762504199, -90.08204396286676]),
                "name" => "New Orleans Pelicans",
                "city" => "New Orleans",
                "conference" => "West",
                "division" => "Southwest",
                "address" => "1501 Dave Dixon Dr, New Orleans, LA 70113",
                "icon_url" => "Pelicans.png",
            ],
            [
                "team_id" => 12,
                "location" => json_encode([39.764173951643265, -86.15551638780539]),
                "name" => "Indiana Pacers",
                "city" => "Indianapolis",
                "conference" => "East",
                "division" => "Central",
                "address" => "125 S Pennsylvania St, Indianapolis, IN 46204",
                "icon_url" => "Pacers.png",
            ],
            [
                "team_id" => 23,
                "location" => json_encode([39.90481366770261, -75.17132897520645]),
                "name" => "Philadelphia 76ers",
                "city" => "Philadelphia",
                "conference" => "East",
                "division" => "Atlantic",
                "address" => "3601 S Broad St, Philadelphia, PA 19148",
                "icon_url" => "76ers.png",
            ],
            [
                "team_id" => 21,
                "location" => json_encode([35.46438581609086, -97.51498463898018]),
                "name" => "Oklahoma City Thunder",
                "city" => "Oklahoma City",
                "conference" => "West",
                "division" => "Northwest",
                "address" => "100 W Reno Ave, Oklahoma City, OK 73102",
                "icon_url" => "Thunder.png",
            ],
            [
                "team_id" => 25,
                "location" => json_encode([45.531780549947676, -122.66682788478155]),
                "name" => "Portland Trail Blazers",
                "city" => "Portland",
                "conference" => "West",
                "division" => "Northwest",
                "address" => "1 N Center Ct St, Portland, OR 97227",
                "icon_url" => "TrailBlazers.png",
            ],
            [
                "team_id" => 22,
                "location" => json_encode([28.53976358445202, -81.38385615719315]),
                "name" => "Orlando Magic",
                "city" => "Orlando",
                "conference" => "East",
                "division" => "Southeast",
                "address" => "400 W Church St, Orlando, FL 32801",
                "icon_url" => "Magic.png",
            ],
            [
                "team_id" => 24,
                "location" => json_encode([33.44657685459291, -112.07109877200304]),
                "name" => "Phoenix Suns",
                "city" => "Phoenix",
                "conference" => "West",
                "division" => "Pacific",
                "address" => "201 E Jefferson St, Phoenix, AZ 85004",
                "icon_url" => "Suns.png",
            ],
            [
                "team_id" => 16,
                "location" => json_encode([25.78283480212781, -80.18711514720873]),
                "name" => "Miami Heat",
                "city" => "Miami",
                "conference" => "East",
                "division" => "Southeast",
                "address" => "601 Biscayne Blvd, Miami, FL 33132",
                "icon_url" => "Heat.png",
            ],
            [
                "team_id" => 26,
                "location" => json_encode([38.581396514387535, -121.49971372092479]),
                "name" => "Sacramento Kings",
                "city" => "Sacramento",
                "conference" => "West",
                "division" => "Pacific",
                "address" => "500 David J Stern Walk, Sacramento, CA 95814",
                "icon_url" => "Kings.png",
            ],
            [
                "team_id" => 18,
                "location" => json_encode([44.97966853985311, -93.27611334751393]),
                "name" => "Minnesota Timberwolves",
                "city" => "Minneapolis",
                "conference" => "West",
                "division" => "Northwest",
                "address" => "600 N 1st Ave, Minneapolis, MN 55403",
                "icon_url" => "Timberwolves.png",
            ],
            [
                "team_id" => 27,
                "location" => json_encode([29.43620855420887, -98.43604187657935]),
                "name" => "San Antonio Spurs",
                "city" => "San Antonio",
                "conference" => "West",
                "division" => "Southwest",
                "address" => "1 Frost Bank Center Dr, San Antonio, TX 78219",
                "icon_url" => "Spurs.png",
            ],
            [
                "team_id" => 10,
                "location" => json_encode([37.77147792281884, -122.38767444004293]),
                "name" => "Golden State Warriors",
                "city" => "San Francisco",
                "conference" => "West",
                "division" => "Pacific",
                "address" => "1 Warriors Way, San Francisco, CA 94158",
                "icon_url" => "Warriors.png",
            ],
            [
                "team_id" => 11,
                "location" => json_encode([29.769105175055262, -95.36338776944349]),
                "name" => "Houston Rockets",
                "city" => "Houston",
                "conference" => "West",
                "division" => "Southwest",
                "address" => "1510 Polk St, Houston, TX 77002",
                "icon_url" => "Rockets.png",
            ],
            [
                "team_id" => 3,
                "location" => json_encode([40.68328067488448, -73.97547086295634]),
                "name" => "Brooklyn Nets",
                "city" => "Brooklyn",
                "conference" => "East",
                "division" => "Atlantic",
                "address" => "620 Atlantic Ave, Brooklyn, NY 11217",
                "icon_url" => "Nets.png",
            ],
            [
                "team_id" => 5,
                "location" => json_encode([41.896238606021335, -87.67536047463182]),
                "name" => "Chicago Bulls",
                "city" => "Chicago",
                "conference" => "East",
                "division" => "Central",
                "address" => "1901 W Madison St, Chicago, IL 60612",
                "icon_url" => "Bulls.png",
            ],
            [
                "team_id" => 6,
                "location" => json_encode([41.503130370542735, -81.6885240438692]),
                "name" => "Cleveland Cavaliers",
                "city" => "Cleveland",
                "conference" => "East",
                "division" => "Central",
                "address" => "1 Center Court, Cleveland, OH 44115",
                "icon_url" => "Cavaliers.png",
            ],
            [
                "team_id" => 4,
                "location" => json_encode([35.22783785681046, -80.83970735663499]),
                "name" => "Charlotte Hornets",
                "city" => "Charlotte",
                "conference" => "East",
                "division" => "Southeast",
                "address" => "333 E Trade St, Charlotte, NC 28202",
                "icon_url" => "Hornets.png",
            ],
            [
                "team_id" => 7,
                "location" => json_encode([32.8103442301582, -96.80950968332428]),
                "name" => "Dallas Mavericks",
                "city" => "Dallas",
                "conference" => "West",
                "division" => "Southwest",
                "address" => "2500 Victory Ave, Dallas, TX 75219",
                "icon_url" => "Mavericks.png",
            ],
            [
                "team_id" => 29,
                "location" => json_encode([40.76971807394582, -111.90137289775218]),
                "name" => "Utah Jazz",
                "city" => "Salt Lake City",
                "conference" => "West",
                "division" => "Northwest",
                "address" => "301 S Temple, Salt Lake City, UT 84101",
                "icon_url" => "Jazz.png",
            ],
            [
                "team_id" => 15,
                "location" => json_encode([35.14259406573528, -90.05163738384557]),
                "name" => "Memphis Grizzlies",
                "city" => "Memphis",
                "conference" => "West",
                "division" => "Southwest",
                "address" => "191 Beale St, Memphis, TN 38103",
                "icon_url" => "Grizzlies.png",
            ],
            [
                "team_id" => 13,
                "location" => json_encode([33.946029198003394, -118.34200356917704]),
                "name" => "Los Angeles Clippers",
                "city" => "Los Angeles",
                "conference" => "West",
                "division" => "Pacific",
                "address" => "3930 W Century Blvd, Inglewood, CA 90303",
                "icon_url" => "Clippers.png",
            ],
        ];

        DB::table("teams")->insert($teams);
    }
}
