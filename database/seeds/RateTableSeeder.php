<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class RateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rate')->insert([
            [
                'source_currency' => 'BTC',
                'target_currency' => 'USD',
                'amount' => 1,
                'exchange_rate' => 8834,
                'trading_date' => Carbon::now()->toDateTimeString()
            ],
            [
                'source_currency' => 'BTC',
                'target_currency' => 'Satoshi',
                'amount' => 1,
                'exchange_rate' => 0.00000001,
                'trading_date' => Carbon::now()->toDateTimeString()
            ],
            [
                'source_currency' => 'Satoshi',
                'target_currency' => 'USD',
                'amount' => 1000,
                'exchange_rate' => 0.08834,
                'trading_date' => Carbon::now()->toDateTimeString()

            ]
        ]);
    }
}
