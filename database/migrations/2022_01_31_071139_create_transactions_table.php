<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->foreignId('ticket_id')->constrained();
            $table->foreignId('user_id')->nullable()->constrained();
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->decimal('amount', 6, 0);
            $table->integer('dicount')->nullable()->comment('discount/percent');
            $table->decimal('total_payments', 7, 0);
            $table->integer('seats')->unsigned()->default(1);
            $table->enum('status', ['Failed','Completed','Abondoned']);
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
        Schema::dropIfExists('transactions');
    }
}
