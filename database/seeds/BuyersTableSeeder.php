<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BuyersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('buyers')->insert([
            [
                'first_name' => 'John',
                'reputation_negative' => rand(1, 50),
                'reputation_positive' => rand(1, 50),
            ],
            [
                'first_name' => 'Michael',
                'reputation_negative' => rand(1, 50),
                'reputation_positive' => rand(1, 50),
            ],
            [
                'first_name' => 'Samanta',
                'reputation_negative' => rand(1, 50),
                'reputation_positive' => rand(1, 50),
            ]
        ]);
    }
}
