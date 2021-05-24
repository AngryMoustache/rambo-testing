<?php

namespace App;

class Deviantion
{
    public function __construct($item)
    {
        foreach ($item as $key => $value) {
            $this->{$key} = $value;
        }
    }

    public function getImage()
    {
        return $this->content['src'] ?? null;
    }

    public function getThumbnail()
    {
        return $this->thumbs[count($this->thumbs) - 1]['src'] ?? null;
    }

    public function getLink()
    {
        return $this->url;
    }
}
