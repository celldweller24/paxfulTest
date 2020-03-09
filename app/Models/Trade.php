<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trade extends Model
{
    public $timestamps = false;
    protected $hidden = [
        'buyer_id',
        'payment_id',
        'created_at',
        'updated_at'
    ];

    public function payment() {
        return $this->belongsTo(Payment::class);
    }
}
