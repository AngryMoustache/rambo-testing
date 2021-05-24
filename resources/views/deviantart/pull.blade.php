@extends('layouts.app')

@section('body')
    {{-- <div class="container mx-auto js-vue">
        <deviant-gallery
            url="{{ route('api.deviantart.page') }}"
            add-url="{{ route('api.deviantart.add') }}"
            page="{{ $page }}"
        />
    </div> --}}
    <livewire:deviantart-pull :id="$id" />
@endsection
