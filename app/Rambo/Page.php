<?php

namespace App\Rambo;

use AngryMoustache\PageArchitect\Resource\Fields\PageArchitect;
use AngryMoustache\Rambo\Resource\Fields\BooleanField;
use AngryMoustache\Rambo\Resource\Fields\Button;
use AngryMoustache\Rambo\Resource\Fields\TextField;
use AngryMoustache\Rambo\Resource\Resource;
use AngryMoustache\Rambo\Resource\Traits\Sluggable;

class Page extends Resource
{
    use Sluggable;

    public $displayName = 'title';
    public $slugNameField = 'title';

    public $searchableFields = [
        'title',
        'slug'
    ];

    public function fields()
    {
        return [
            TextField::make('title')
                ->rules('required')
                ->sortable(),

            TextField::make('slug')
                ->sortable(),

            PageArchitect::make('body')
                ->hideFrom(['index', 'show']),

            BooleanField::make('online')
                ->sortable(),

            Button::make('submit'),
        ];
    }

    public function sortedQuery()
    {
        return $this->query()->orderBy('title', 'asc');
    }
}
