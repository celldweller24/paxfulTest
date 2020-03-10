<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddRelationsToTradesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('trades', function (Blueprint $table) {
            $table->foreign('buyer_id')
                ->references('id')->on('buyers')
                ->onDelete('cascade');
            $table->foreign('payment_id')
                ->references('id')->on('payments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('trades', function (Blueprint $table) {
            $table->dropForeig('buyer_id');
            $table->dropColumn('buyer_id');
            $table->dropForeig('payment_id');
            $table->dropColumn('payment_id');
        });
    }
}
