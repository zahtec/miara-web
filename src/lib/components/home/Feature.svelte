<script lang="ts">
	import type { Component } from "svelte";

	export let name: string;
	export let description: string;
	export let graphic: Component;
</script>

<div
	class="flex gap-6 bg-white border-black relative items-center overflow-hidden border-1 w-full rounded-xl p-6 flex-grow xs:flex-col-reverse xs:gap-8 xs:justify-between md:flex-row md:gap-48 lg:gap-10"
>
	<div class="w-full lg:max-w-xs">
		<h1 class="text-xl font-bold xs:text-2xl md:mt-0">{name}</h1>
		<p class="mt-2 max-w-xs md:max-w-none">{description}</p>
	</div>

	<div class="w-[8.5rem] xs:hidden"></div>

	<svelte:component
		this={graphic}
		class="absolute -right-4 w-32 aspect-square xs:static xs:h-40 xs:w-full xs:p-2 md:w-fit md:shrink-0"
	/>
</div>
