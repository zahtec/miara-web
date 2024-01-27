<script lang="ts">
	import ShallowArrowIcon from "~icons/fluent/ios-arrow-rtl-24-filled";

	import type { ComponentType } from "svelte";

	let className = "";
	export let disabled = false;
	export let icon: ComponentType | null = null;

	export { className as class };
</script>

<button
	class="bg-neutral-800 border-1 border-neutral-700 rounded-xl px-6 py-3 font-semibold flex gap-4 items-center justify-between w-fit select-none transition-opacity duration-200 disabled:opacity-50 {className}"
	{disabled}
	on:click
>
	<p>
		<slot />
	</p>

	<svelte:component
		this={icon ?? ShallowArrowIcon}
		class="{icon ? 'w-5 h-5' : 'w-4 h-4'} shrink-0"
	/>
</button>
