<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('payments')->insert([
            [
                'method' => 'Amazon Gift Card'
            ],
            [
                'method' => 'ITunes Gift Card'
            ],
            [
                'method' => 'Google Gift Card'
            ]
        ]);
    }
}
