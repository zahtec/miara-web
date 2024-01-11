<script lang="ts">
	import { scrollToTop } from "$lib/utils/scroll";

	import type { ComponentType } from "svelte";

	export let name: string;
	export let href: string;
	export let icon: ComponentType;
</script>

<a {href} class="flex gap-1 items-center" on:click={scrollToTop}>
	<svelte:component this={icon} class="w-4 h-4" />
	<p>{name}</p>
</a>
