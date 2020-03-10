<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Trade as TradeResource;

class Buyer extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request) {
        return [
            'id'         => $this->id,
            'first_name' => $this->first_name,
            'total'      => TradeResource::collection($this->whenLoaded('trades'))->count(),
            'trades'     => TradeResource::collection($this->whenLoaded('trades')),
            'reputation' => [
                'negative' => $this->reputation_negative,
                'positive' => $this->reputation_positive
            ]
        ];
    }
}