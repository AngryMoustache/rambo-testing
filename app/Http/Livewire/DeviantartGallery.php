<?php

namespace App\Http\Livewire;

use App\Facades\Deviantart;
use Livewire\Component;

class DeviantartGallery extends Component
{
    public $results = [];
    public $page = 1;
    public $modalItem = null;

    public function render()
    {
        $this->newPage();
        session(['deviantart-page' => $this->page]);
        return view('livewire.deviantart-gallery');
    }

    public function openModal($key)
    {
        $this->modalItem = $this->results['items'][$key] ?? null;
    }

    public function newPage($page = null)
    {
        $this->page = $page ?? $this->page;
        $this->results = Deviantart::favorites($this->page, 30);
    }
}
