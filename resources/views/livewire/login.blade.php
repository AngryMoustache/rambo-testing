<form wire:submit.prevent="attemptLogin" class="px-4 md:px-0">
    <p class="text-red-500 p-1 pb-4 text-center">{{ $error }}</p>

    <input
        type="text"
        class="w-full px-2 py-1 border bg-gray-800 border-gray-500 text-gray-300 text-lg rounded mb-4"
        placeholder="Username"
        wire:model="username"
    >

    <input
        type="password"
        class="w-full px-2 py-1 border bg-gray-800 border-gray-500 text-gray-300 text-lg rounded mb-4"
        placeholder="Password"
        wire:model="password"
    >

    <button
        type="submit"
        class="
            w-full py-1 text rounded font-semibold text-lg
            border-2 border-orange-400
            bg-orange-400 hover:bg-gray-800 hover:text-orange-400
        "
    >
        Login
    </button>
</form>
