<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('first_name')->index();
            $table->string('last_name')->index();
            $table->string('email')->unique()->index();
            $table->string('phone_number')->unique()->index();
            $table->string('avatar')->nullable();
            $table->string('password')->nullable();

            $table->foreignId('role_id')->index();

            $table->boolean('active')->default(true);
            $table->softDeletes();
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
        Schema::drop('users');
    }
};
