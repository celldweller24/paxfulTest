<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Buyer extends Model
{
    protected $fillable = ['first_name', 'reputation_negative', 'reputation_positive'];

    public function trade() {
        return $this->hasMany(Trade::class);
    }

    public function toArray() {
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'total' => count($this->trade->toArray()),
            'trades' => $this->trade->toArray(),
            'reputation' => [
                'negative' => $this->reputation_negative,
                'positive' => $this->reputation_positive
            ]
        ];
    }
}
