<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Buyer extends Model
{
    protected $fillable = ['first_name', 'reputation_negative', 'reputation_positive'];

    public function trades() {
        return $this->hasMany(Trade::class);
    }
}
