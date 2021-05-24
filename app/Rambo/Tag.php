<?php

namespace App\Rambo;

use AngryMoustache\Rambo\Resource\Fields\Button;
use AngryMoustache\Rambo\Resource\Fields\HabtmField;
use AngryMoustache\Rambo\Resource\Fields\TextField;
use AngryMoustache\Rambo\Resource\Resource;
use AngryMoustache\Rambo\Resource\Traits\Sluggable;

class Tag extends Resource
{
    use Sluggable;

    public $displayName = 'name';

    public $paginate = 100;

    public $searchableFields = [
        'name',
        'slug',
        'color',
    ];

    public $defaultSortCol = 'name';
    public $defaultSortDir = 'asc';

    public $habtmComponent = 'rambo::components.habtm.tag';

    public function fields()
    {
        return [
            TextField::make('name')
                ->label('Name')
                ->rules('required')
                ->sortable(),

            TextField::make('slug')
                ->label('Slug')
                ->sortable(),

            TextField::make('color')
                ->label('Color')
                ->rules('required'),

            // ColorPickerField::make('color')
            //     ->label('Color')
            //     ->rules('required'),

            HabtmField::make('uploads')
                ->label('Uploads')
                ->resource(Upload::class)
                ->hideFrom(['index']),

            Button::make('submit')
                ->label('Submit'),
        ];
    }
}
