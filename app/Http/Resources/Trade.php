<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Trade extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request) {
        return [
            'id'     => $this->id,
            'status' => $this->status,
            'hash'   => $this->hash,
            'amount' => $this->amount,
            'method' => $this->payment->method
        ];
    }
}