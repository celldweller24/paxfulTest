<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trade extends Model
{
    protected $fillable = ['status', 'hash', 'amount'];

    //protected $with = ['payment'];

    public function payment() {
        return $this->belongsTo(Payment::class);
    }
}
