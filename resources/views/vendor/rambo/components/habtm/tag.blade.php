<span
    class="habtm-picker-grid-panel-item"
    style="color: {{ $item->color }}"
    wire:click="toggleItem({{ $item->id }})"
>
    {{ $item->name }}
</span>
