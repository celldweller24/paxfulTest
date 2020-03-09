<?php

namespace App\Http\Controllers;

use App\Models\Buyer;

class IndexController extends Controller
{
    public function index() {

        $buyers = Buyer::all();

        $data = [];
        foreach ($buyers as $buyer) {
            $trade = $buyer->trade()
                ->select('trades.id', 'trades.status', 'trades.hash', 'trades.amount', "payments.method")
                ->rightJoin('payments', 'payments.id', '=', 'trades.payment_id')
                ->get()->toArray();
            $data[] = [
                'buyer' => $buyer,
                'trade' => $trade
            ];

        }
        return json_encode($data);
    }
}
