<script lang="ts">
	import FilterIcon from "~icons/fluent/filter-12-filled";

	export let active: boolean = false;
</script>

<button
	on:click={() => (active = !active)}
	class:border-opacity-0={!active}
	class:border-opacity-100={active}
	class="flex flex-col bg-neutral-900 relative rounded-xl p-4 overflow-hidden aspect-square h-14 shrink-0 border-1 border-neutral-700 transition-border duration-200 xs:w-28 xs:justify-center xs:flex-row xs:gap-3 md:w-60 md:text-neutral-500 md:pointer-events-none md:border-none lg:hidden"
>
	<FilterIcon class="w-6 h-6 xs:shrink-0" />
	<p class="hidden font-semibold xs:block xs:shrink-0 md:hidden">Filter</p>
	<p class="hidden font-semibold md:block">Filters available soon</p>
</button>
