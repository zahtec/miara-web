<script lang="ts">
	import { spring } from "svelte/motion";

	export let checked = false;
	export let disabled = false;

	$: offset = spring(checked ? 20 : 0, {
		stiffness: 0.1,
		damping: 0.25
	});
</script>

<label
	class:opacity-50={disabled}
	class="flex w-fit items-center cursor-pointer select-none duration-200 transition-opacity"
>
	<div class="relative">
		<input {disabled} type="checkbox" class="sr-only" bind:checked on:change />

		<div
			class="w-12 h-7 bg-neutral-950 rounded-full shadow-inner transition-colors duration-300 ease-in-out"
			class:bg-green-400={checked}
		/>

		<div
			class="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ease-in-out"
			style="transform: translateX({$offset}px)"
		/>
	</div>
</label>
