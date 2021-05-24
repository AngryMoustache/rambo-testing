<?php

use App\Filter;

if (! function_exists('parse_filters')) {
    function parse_filters($filters)
    {
        $result = [];

        if (empty($filters)) {
            return new Filter();
        }

        $filters = explode('/', $filters);
        foreach ($filters as $filter) {
            $filter = explode(':', $filter);
            $result[$filter[0]] = explode(',', $filter[1]);
        }

        return new Filter($result);
    }
}
