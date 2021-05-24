<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UploadResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'link' => $this->getLink(),
            'has_link' => $this->link ? true : false,
            'preview' => $this->attachment->format('upload'),
            'youtube' => $this->youtube_id,
            'image' => $this->attachment->path(),
            'tags' => $this->tags->pluck('slug'),
            'variants' => $this->variants->map(function ($variant) {
                return [
                    'preview' => $variant->format('upload'),
                    'image' => $variant->path(),
                ];
            }),
        ];
    }
}
