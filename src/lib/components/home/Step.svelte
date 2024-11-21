<script lang="ts">
	import ShallowArrowIcon from "~icons/fluent/ios-arrow-rtl-24-filled";
	import type { Component } from "svelte";

	export let name: string;
	export let buttonHref: string;
	export let buttonLabel: string;
	export let description: string;
	export let icon: Component;
</script>

<div
	class="relative border-1 border-blue-700 bg-blue-900 rounded-xl p-4 overflow-hidden group shadow-[0_0_1.5rem_-1rem] shadow-blue-700 z-10 flex flex-col even:max-sm:text-right h-52 md:h-48"
>
	<h1 class="text-xl font-bold xs:text-2xl">{name}</h1>

	<p
		class="mt-2 mb-4 max-w-sm group-even:ml-auto sm:max-w-sm sm:ml-0 sm:group-even:ml-0 sm:group-last-of-type:max-w-sm"
	>
		{description}
	</p>

	<div
		class="absolute -z-10 text-blue-700 -right-2 -bottom-2 group-even:-left-3 xs:inset-y-0 xs:my-auto xs:h-fit xs:-right-8 xs:group-even:-left-8 sm:group-even:left-auto sm:-bottom-40 sm:-right-8"
	>
		<svelte:component this={icon} class="w-14 h-14 xs:w-20 xs:h-20" />
	</div>

	<a
		href={buttonHref}
		class="flex items-center font-semibold gap-1 group-even:justify-end sm:group-even:justify-start mt-auto"
	>
		<p>{buttonLabel}</p>
		<ShallowArrowIcon class="w-4 h-4 shrink-0" />
	</a>
</div>
