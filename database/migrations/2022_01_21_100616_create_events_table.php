<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('title')->unique();
            $table->text('description');
            $table->string('banner');
            $table->timestamp('eventDate');
            $table->timestamp('endDate')->nullable();
            $table->enum('status',['Pending','Allowed','Completed','Cancelled'])->default('Pending');
            $table->string('location');
            $table->string('venue');
            $table->string('organizer');
            $table->string('category');
            $table->string('address');
            $table->string('phone');
            $table->string('email');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
