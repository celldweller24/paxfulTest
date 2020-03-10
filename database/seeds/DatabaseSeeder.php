<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(BuyersTableSeeder::class);
        $this->call(PaymentsTableSeeder::class);
        $this->call(RateTableSeeder::class);
        $this->call(TradesTableSeeder::class);
    }
}
