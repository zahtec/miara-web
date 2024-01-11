<script lang="ts">
	import { scrollToTop } from "$lib/utils/scroll";
	import ShallowArrowIcon from "~icons/fluent/ios-arrow-rtl-24-filled";

	import type { ComponentType } from "svelte";

	export let name: string;
	export let href: string;
	export let icon: ComponentType;
</script>

<a {href} class="flex gap-2 items-center py-4 w-full" on:click={scrollToTop}>
	<svelte:component this={icon} class="w-6 h-6" />

	<p class="leading-none">{name}</p>

	<ShallowArrowIcon class="w-5 h-5 ml-auto" />
</a>
