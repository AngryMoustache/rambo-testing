<?php

namespace App;

use App\Models\Tag;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class Deviantart
{
    public $token = null;
    public $url = null;
    public $folder = null;

    public $limit = 20;

    public function __construct()
    {
        $this->url = config('deviantart.base-url');
        $this->folder = config('deviantart.favorites-folder');

        $this->token = Http::get(
            config('deviantart.auth-url'),
            config('deviantart.auth-body')
        )->json()['access_token'] ?? null;
    }

    public function fetch($id)
    {
        $item = $this->call("/deviation/${id}");
        $meta = $this->metadata($id);

        $item['description'] = $meta['description'];
        $item['tags'] = collect($meta['tags'])->map(function ($tag) {
            $dbTag = Tag::whereName($tag['tag_name'])->first();
            if ($dbTag) {
                return [
                    'name' => $dbTag->name,
                    'color' => $dbTag->color,
                    'new' => false,
                ];
            } else {
                return [
                    'name' => $tag['tag_name'],
                    'color' => '#5bc215',
                    'new' => true,
                ];
            }
        })->toArray();

        $item['tags'][] = [
            'name' => Str::slug($meta['author']['username']),
            'color' => '#1bc5c2',
        ];

        return $item;
    }

    public function metadata($id)
    {
        return $this->call(
            '/deviation/metadata',
            ['deviationids' => $id]
        )['metadata'][0] ?? [];
    }

    public function favorites($page = 1, $limit = null)
    {
        $limit ??= $this->limit;
        $maxLimit = 24;

        $items = [];
        for ($i = 0; $i < ceil($limit / 24); $i++) {
            $offset = (($page - 1) * $limit) + ($maxLimit * $i);

            $response = Http::withToken($this->token)
                ->get("{$this->url}/collections/{$this->folder}", [
                    'username' => 'boundartist',
                    'limit' => $maxLimit,
                    'offset' => $offset,
                    'mature_content' => true,
                ])
                ->json();

            foreach ($response['results'] as $result) {
                $items[] = $result;
            }
        }

        return collect([
            'has_more' => $response['has_more'] ?? false,
            'items' => collect($items)->take($limit)
                ->map(fn ($value) => new Deviantion($value))
        ]);
    }

    public function call($url, $params = [])
    {
        return Http::withToken($this->token)
            ->get("{$this->url}${url}", $params)
            ->json();
    }
}
