<script lang="ts">
	import { flip } from "svelte/animate";
	import { fade } from "svelte/transition";
	import Banner from "$lib/components/Banner.svelte";
	import Service from "$lib/components/Service.svelte";
	import SearchBar from "$lib/components/SearchBar.svelte";
	import BookmarkIcon from "~icons/fluent/bookmark-20-filled";
	import PageContent from "$lib/components/PageContent.svelte";
	import FilterMenu from "$lib/components/discover/FilterMenu.svelte";
	import FilterButton from "$lib/components/discover/FilterButton.svelte";

	import type { PageData } from "./$types";

	export let data: PageData;

	let search = "";
	let filterMenu = false;
</script>

<svelte:head>
	<title>Saved — Miara</title>
</svelte:head>

<Banner
	title="Saved"
	description="View the homelessness services you saved for later."
	icon={BookmarkIcon}
	class="from-green-950 to-green-700"
/>

<PageContent class="max-w-screen-md md:py-8 lg:flex lg:gap-8 lg:justify-center lg:max-w-primary">
	<div class="hidden border-r-1 border-neutral-700 pr-8 w-52 shrink-0 lg:block xl:w-60">
		<h1 class="font-bold text-2xl">Filters</h1>
		<p class="mt-1">Filters will be availible soon.</p>
	</div>

	<div class="flex flex-col gap-6 md:gap-10 lg:w-full">
		<div class="flex gap-4 md:mb-4">
			<SearchBar bind:value={search} />

			<FilterButton bind:active={filterMenu} />
		</div>

		<FilterMenu active={filterMenu} />

		{#each data.saved as service (service.id)}
			<div animate:flip={{ duration: 150 }} out:fade={{ duration: 200 }}>
				<Service
					{service}
					on:change={({ detail: { id, saved } }) =>
						!saved && (data.saved = data.saved.filter((service) => service.id !== id))}
				/>
			</div>
		{:else}
			<p in:fade={{ delay: 220, duration: 200 }} class="font-semibold text-lg text-center">
				You have no saved services.
			</p>
		{/each}
	</div>
</PageContent>
