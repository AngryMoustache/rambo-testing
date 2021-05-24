<?php

namespace App\Http\Livewire;

use App\Facades\Deviantart;
use App\Models\Tag;
use App\Models\Upload;
use Livewire\Component;
use Illuminate\Support\Str;

class DeviantartPull extends Component
{
    public $item;
    public $tags;
    public $selectedTags = [];

    public function mount($id)
    {
        $this->item = Deviantart::fetch($id);
        $this->tags = Tag::get();
        $this->tags = array_merge(
            $this->item['tags'],
            $this->tags->map(fn ($tag) => [
                'name' => $tag->name,
                'color' => $tag->color,
            ])->toArray()
        );

        $this->selectedTags = collect($this->item['tags'])
            ->mapWithKeys(fn ($tag) => [$tag['name'] => $tag])
            ->toArray();
    }

    public function selectTag($tag)
    {
        $tag = (array) json_decode($tag);
        if ($this->selectedTags[$tag['name']] ?? false) {
            unset($this->selectedTags[$tag['name']]);
        } else {
            $this->selectedTags[$tag['name']] = $tag;
        }
    }

    public function pull()
    {
        // Create new tags
        $tags = collect($this->selectedTags)->map(function ($tag) {
            $dbTag = Tag::whereName($tag['name'])->first();
            if (! $dbTag) {
                $dbTag = new Tag([
                    'name' => $tag['name'],
                    'slug' => Str::slug($tag['name']),
                    'color' => $tag['color'],
                ]);

                $dbTag->save();
            }

            return $dbTag->id;
        });

        // Create upload
        $upload = new Upload([
            'name' => $this->item['title'],
            'description' => $this->item['description'] ?? null,
            'slug' => Str::slug($this->item['title']),
            'link' => $this->item['url'],
            'attachment_id' => Upload::uploadFromUrl(
                    $this->item['content']['src'],
                    $this->item['title']
                )->id,
            'online' => 1
        ]);

        $upload->save();
        $upload->tags()->sync($tags->values()->toArray());

        $page = session('deviantart-page', 1);
        return redirect()->to("/deviantart/${page}");
    }

    public function cancel()
    {
        $page = session('deviantart-page', 1);
        return redirect()->to("/deviantart/${page}");
    }
}
