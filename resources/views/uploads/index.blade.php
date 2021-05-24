@extends('layouts.gallery')

@section('body')
    <div class="js-vue">
        <gallery
            :uploads="{{ json_encode($uploads) }}"
            :tags="{{ json_encode($tags) }}"
            :filter-route="'{{ route('gallery.filter') }}'"
            :filters="{{ $filters->json() }}"
        />
    </div>
@endsection
