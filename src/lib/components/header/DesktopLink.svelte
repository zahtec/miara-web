<script lang="ts">
	import { scrollToTop } from "$lib/utils/scroll";

	import type { Component } from "svelte";

	export let name: string;
	export let href: string;
	export let icon: Component;
</script>

<a {href} class="flex gap-1 items-center" on:click={scrollToTop}>
	<svelte:component this={icon} class="w-4 h-4" />
	<p>{name}</p>
</a>
