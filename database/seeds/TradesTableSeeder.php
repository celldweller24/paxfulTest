<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class TradesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('trades')->insert([
            [
                'status' => rand(0, 1),
                'hash' => bcrypt(Str::random(6)),
                'buyer_id' => rand(1, 3),
                'payment_id' => rand(1, 3),
                'amount' => rand(20, 100)
            ],
            [
                'status' => rand(0, 1),
                'hash' => bcrypt(Str::random(6)),
                'buyer_id' => rand(1, 3),
                'payment_id' => rand(1, 3),
                'amount' => rand(20, 100)
            ],
            [
                'status' => rand(0, 1),
                'hash' => bcrypt(Str::random(6)),
                'buyer_id' => rand(1, 3),
                'payment_id' => rand(1, 3),
                'amount' => rand(20, 100)
            ],
            [
                'status' => rand(0, 1),
                'hash' => bcrypt(Str::random(6)),
                'buyer_id' => rand(1, 3),
                'payment_id' => rand(1, 3),
                'amount' => rand(20, 100)
            ],
            [
                'status' => rand(0, 1),
                'hash' => bcrypt(Str::random(6)),
                'buyer_id' => rand(1, 3),
                'payment_id' => rand(1, 3),
                'amount' => rand(20, 100)
            ],
            [
                'status' => rand(0, 1),
                'hash' => bcrypt(Str::random(6)),
                'buyer_id' => rand(1, 3),
                'payment_id' => rand(1, 3),
                'amount' => rand(20, 100)
            ],
            [
                'status' => rand(0, 1),
                'hash' => bcrypt(Str::random(6)),
                'buyer_id' => rand(1, 3),
                'payment_id' => rand(1, 3),
                'amount' => rand(20, 100)
            ]
        ]);
    }
}
