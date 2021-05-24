@extends('layouts.app')

@section('body')
    <div class="container my-8 mx-auto text-white">
        <h1>{{ $page->title }}</h1>
        {!! PageArchitect::render($page->body) !!}
    </div>
@endsection
