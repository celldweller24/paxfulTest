<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Buyer extends Model
{

    public function trade() {
        return $this->hasMany(Trade::class);
    }
}
