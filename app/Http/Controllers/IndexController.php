<?php

namespace App\Http\Controllers;

use App\Models\Buyer;

class IndexController extends Controller
{
    public function index() {

        $data = Buyer::with('trade')->get();
        return json_encode($data);
    }
}
