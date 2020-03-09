<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trade extends Model
{
    protected $fillable = ['status', 'hash', 'amount'];

    public function payment() {
        return $this->belongsTo(Payment::class);
    }

    public function toArray() {
        return [
            'id' => $this->id,
            'status' => $this->status,
            'hash' => $this->hash,
            'method' => $this->payment->method,
            'amount' => $this->amount
        ];
    }
}
