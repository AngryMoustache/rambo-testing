<?php

namespace App;

class Filter
{
    public $filters = [];

    public function __construct($filters = [])
    {
        $this->filters = $filters;
    }

    public function __get($key)
    {
        return $this->filters[$key] ?? null;
    }

    public function getPage()
    {
        return $this->filters['page'][0] ?? 1;
    }

    public function json()
    {
        return json_encode($this->filters);
    }
}
