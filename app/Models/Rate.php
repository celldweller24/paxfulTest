<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    protected $fillable = ['source_currency', 'target_currency', 'amount', 'exchange_rate', 'trading_date'];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'rate';
}
