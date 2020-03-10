<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class BuyerCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return $this->collection;
        /*return [
            'id' => $this->collection->get("id")->first(),
            'first_name' => $this->collection->get('first_name'),
            'reputation' => [
                'negative' => $this->collection->get('reputation_negative'),
                'positive' => $this->collection->get('reputation_positive')
            ]
        ];*/

        /*return [
            'data' => $this->collection->map(function ($order) use ($request) {
                return (new OrderResource($order))->toArray($request);
            })
        ];*/
    }
}
