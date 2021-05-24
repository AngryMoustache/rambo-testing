@extends('layouts.default')

@section('styles') <livewire:styles> @endsection

@section('body')
    <div class="w-full md:w-96 my-4 mx-auto">
        <div class="w-1/2 md:w-72 mx-auto">
            <x-logo />
        </div>

        <livewire:login :url="request()->url()" />
    </div>
@endsection

@section('scripts') <livewire:scripts> @endsection
