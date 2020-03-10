<?php

namespace App\Http\Controllers;

use App\Models\Buyer;
use App\Http\Resources\BuyerCollection;

class IndexController extends Controller
{
    public function index() {

        $data = BuyerCollection::collection(Buyer::all());
        return $data->toJson();
    }
}
