<?php

namespace App\Models;

use App\Models\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasSlug;

    protected $fillable = [
        'name',
        'slug',
        'color',
    ];

    public static $filters;

    public function uploads()
    {
        return $this->belongsToMany(Upload::class);
    }

    public static function getSearchList()
    {
        self::$filters = parse_filters(request()->filter ?? '')->tag ?? [];

        return self::get()
            ->map(function ($item) {
                return [
                    'name' => $item->name,
                    'slug' => $item->slug,
                    'color' => $item->color,
                    'count' => $item->uploadCount($item),
                ];
            })
            ->sortBy('name')
            ->sortByDesc('count')
            ->values()
            ->toArray();
    }

    public static function uploadCount($item)
    {
        return $item->uploads->filter(function ($upload) {
            foreach(self::$filters as $tag) {
                if (! $upload->tags->map(fn ($tag) => $tag->slug)->contains($tag)) {
                    return false;
                }
            }
            return true;
        })->count();
    }
}
