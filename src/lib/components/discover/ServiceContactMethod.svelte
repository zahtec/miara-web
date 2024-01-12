<script lang="ts">
	import type { ComponentType } from "svelte";

	export let href: string;
	export let value: string;
	export let icon: ComponentType;
</script>

<div class="flex items-center gap-2 py-3 xs:py-4 lg:text-lg lg:gap-3">
	<svelte:component this={icon} class="w-6 h-6 mt-0.5 shrink-0 lg:w-7 lg:h-7" />

	<a target="_blank" {href} class="underline text-ellipsis overflow-hidden">
		{value}
	</a>
</div>
