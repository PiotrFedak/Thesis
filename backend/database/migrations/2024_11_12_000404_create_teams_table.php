<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    public function up(): void
    {
        Schema::create("teams", function (Blueprint $table): void {
            $table->id();
            $table->integer("team_id")->unique();
            $table->json("location");
            $table->string("name");
            $table->string("city");
            $table->string("conference");
            $table->string("division");
            $table->string("address");
            $table->string("icon_url");
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists("teams");
    }
};
