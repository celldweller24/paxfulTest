<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'rate';

    public $timestamps = false;
    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
