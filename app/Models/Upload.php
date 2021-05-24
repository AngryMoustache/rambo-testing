<?php

namespace App\Models;

use AngryMoustache\Media\Models\Attachment;
use AngryMoustache\Rambo\Models\Administrator;
use AngryMoustache\Rambo\Rambo;
use App\Models\Traits\HasSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Upload extends Model
{
    use HasSlug;

    protected $fillable = [
        'name',
        'slug',
        'administrator_id',
        'description',
        'link',
        'attachment_id',
        'youtube_id',
        'spotlight',
        'online',
    ];

    public function administrator()
    {
        return $this->belongsTo(Administrator::class);
    }

    public function attachment()
    {
        return $this->belongsTo(Attachment::class);
    }

    public function variants()
    {
        return $this->belongsToMany(Attachment::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function galleries()
    {
        return $this->belongsToMany(Gallery::class);
    }

    public function getLink()
    {
        return $this->link ?? optional($this->attachment)->path();
    }

    public static function getSearchList()
    {
        return self::get()->map(function ($item) {
            return [
                'type' => 'upload',
                'name' => $item->name,
                'slug' => $item->slug,
            ];
        })->toArray();
    }

    protected static function booted()
    {
        static::addGlobalScope('online', function ($query) {
            $query->where('online', 1);
        });

        static::addGlobalScope('spotlight_order', function ($query) {
            $query->orderBy('spotlight', 'desc');
            $query->orderBy('uploads.id', 'desc');
        });
    }

    public static function uploadFromUrl($url, $name)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HEADER, true);
        curl_setopt($ch, CURLOPT_NOBODY, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_exec($ch);
        $fileInfo = getimagesize($url);
        $extension = Str::of($url)->beforeLast('?')->afterLast('.');
        $sluggedName = Str::slug($name) . ".${extension}";

        $attachment = [
            'original_name' => $sluggedName,
            'alt_name' => $name,
            'disk' => 'public',
            'width' => $fileInfo[0],
            'height' => $fileInfo[1],
            'mime_type' => $fileInfo['mime'],
            'size' => curl_getinfo($ch,CURLINFO_CONTENT_LENGTH_DOWNLOAD),
            'extension' => $extension,
        ];

        $attachment = Attachment::firstOrCreate($attachment);

        Storage::putFileAs(
            "public/attachments/{$attachment->id}/",
            $url,
            $sluggedName
        );

        return $attachment;
    }
}
