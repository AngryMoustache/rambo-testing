<span
    class="habtm-picker-grid-panel-item"
    wire:click="toggleItem({{ $item->id }})"
>
    <img src="{{ $item->attachment->format('thumb') }}">
    {{ $item->name }}
</span>
