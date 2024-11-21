<script lang="ts">
	import ShallowArrowIcon from "~icons/fluent/ios-arrow-rtl-24-filled";

	import type { Component } from "svelte";

	let className = "";
	export let href: string;
	export let icon: Component | null = null;
	export let target: "_blank" | "_self" | "_parent" | "_top" = "_self";

	export { className as class };
</script>

<a
	{href}
	{target}
	class="border-1 border-neutral-700 rounded-xl px-6 py-3 font-semibold flex gap-4 items-center justify-between w-fit select-none {className}"
>
	<p>
		<slot />
	</p>

	<svelte:component
		this={icon ?? ShallowArrowIcon}
		class="{icon ? 'w-5 h-5' : 'w-4 h-4'} shrink-0"
	/>
</a>
