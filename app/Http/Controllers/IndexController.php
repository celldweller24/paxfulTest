<?php

namespace App\Http\Controllers;

use App\Models\Buyer;
use App\Http\Resources\BuyerCollection;

class IndexController extends Controller
{
    public function index() {

        return (new BuyerCollection(Buyer::all()
            ->load('trades')));
    }
}
