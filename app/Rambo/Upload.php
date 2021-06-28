<?php

namespace App\Rambo;

use AngryMoustache\PageArchitect\Resource\Fields\PageArchitectField;
use AngryMoustache\Rambo\Resource\Fields\AttachmentField;
use AngryMoustache\Rambo\Resource\Fields\BooleanField;
use AngryMoustache\Rambo\Resource\Fields\Button;
use AngryMoustache\Rambo\Resource\Fields\HabtmField;
use AngryMoustache\Rambo\Resource\Fields\ManyAttachmentField;
use AngryMoustache\Rambo\Resource\Fields\TabGroup;
use AngryMoustache\Rambo\Resource\Fields\TextField;
use AngryMoustache\Rambo\Resource\Fields\YoutubeField;
use AngryMoustache\Rambo\Resource\Filters\OnlineFilter;
use AngryMoustache\Rambo\Resource\Resource;
use AngryMoustache\Rambo\Resource\Traits\Sluggable;

class Upload extends Resource
{
    use Sluggable;

    public $displayName = 'name';

    public $searchableFields = [
        'name',
        'slug'
    ];

    public $habtmComponent = 'rambo::components.habtm.upload';

    public function fields()
    {
        return [
            TextField::make('name')
                ->rules('required')
                ->sortable(),

            TextField::make('slug')
                ->sortable(),

            PageArchitectField::make('description')
                ->label('Body')
                ->hideFrom(['index']),

            // LinkPickerField::make('link')
            //     ->hideFrom(['index']),

            HabtmField::make('tags')
                ->resource(Tag::class)
                ->hideFrom(['index']),

            BooleanField::make('spotlight')
                ->sortable(),

            AttachmentField::make('attachment_id')
                ->label('Attachment')
                ->rules('required'),

            ManyAttachmentField::make('variants')
                ->hideFrom(['index']),

            YoutubeField::make('youtube_id')
                ->label('Youtube video')
                ->hideFrom(['index']),

            BooleanField::make('online')
                ->sortable(),

            Button::make('submit'),
        ];
    }

    public function sortedQuery()
    {
        return $this->query()->orderBy('name', 'asc');
    }

    public function filters()
    {
        return [
            OnlineFilter::class,
        ];
    }
}
