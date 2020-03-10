<?php

namespace App\Http\Controllers;

use App\Models\Rate;

class RateController extends Controller
{
    public function index() {
        $rate = Rate::all();
        return $rate->toJson();
    }
}
