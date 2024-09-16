<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { browser } from "$app/environment";
	import Banner from "$lib/components/Banner.svelte";
	import SearchBar from "$lib/components/SearchBar.svelte";
	import PageContent from "$lib/components/PageContent.svelte";
	import ServiceComponent from "$lib/components/Service.svelte";
	import CompassIcon from "~icons/fluent/compass-northwest-20-filled";
	import FilterMenu from "$lib/components/discover/FilterMenu.svelte";
	import FilterButton from "$lib/components/discover/FilterButton.svelte";
	import ServiceLoader from "$lib/components/discover/ServiceLoader.svelte";

	import type { PageData } from "./$types";
	import type { services } from "$lib/schemas/drizzle";

	export let data: PageData;

	type Service = typeof services.$inferSelect;

	let offset = 0;
	let search = "";
	let max = false;
	let filterMenu: boolean;
	let loadingMore = false;
	let servicesData: Service[] = [];
	let promise: Promise<void> = new Promise(() => {});

	const concatServices = (services: Service[]) => (servicesData = servicesData.concat(services));

	$: if (search === undefined) {
		offset = 0;
		servicesData = [];
		max = false;
		loadingMore = false;

		promise = new Promise(() => {});
	} else if (browser) {
		loadingMore = offset > 0;

		const req = fetch(`/api/discover?search=${search}&offset=${offset}`).then(async (res) => {
			const services = (await res.json()) as Service[];

			if (services.length) concatServices(services);
			else max = true;

			loadingMore = false;
		});

		if (!offset) promise = req;
	}

	onMount(() => {
		if (data.saved.length) localStorage.setItem("saved", data.saved.join(","));
	});
</script>

<svelte:head>
	<title>Discover — Miara</title>
</svelte:head>

<svelte:window
	on:scroll|passive|trusted={() =>
		window.scrollY / document.body.clientHeight > 0.5 && !max && !loadingMore && (offset += 10)}
/>

<Banner
	title="Discover"
	description="Quickly find homeless services that you are eligible for."
	icon={CompassIcon}
	class="from-blue-950 to-blue-700"
/>

<PageContent class="max-w-screen-md md:py-8 lg:flex lg:gap-8 lg:justify-center lg:max-w-primary">
	<div class="hidden border-r-1 border-neutral-700 pr-8 w-52 shrink-0 lg:block xl:w-60">
		<h1 class="font-bold text-2xl">Filters</h1>
		<p class="mt-1">Coming soon.</p>
	</div>

	<div class="flex flex-col gap-6 md:gap-10 lg:w-full">
		<div class="flex gap-4 md:mb-4">
			<SearchBar bind:value={search} />

			<FilterButton bind:active={filterMenu} />
		</div>

		<FilterMenu active={filterMenu} />

		{#await promise}
			<ServiceLoader />
			<ServiceLoader />
			<ServiceLoader />
		{:then}
			{#if servicesData.length}
				{#each servicesData as service (service.id)}
					<ServiceComponent {service} />
				{/each}
			{:else}
				<p in:fade|global={{ duration: 150, delay: 170 }} class="font-semibold text-lg text-center">
					No results found.
				</p>
			{/if}
		{:catch}
			<p in:fade|global={{ duration: 150, delay: 170 }} class="font-semibold text-lg text-center">
				An error occured.
			</p>
		{/await}

		{#if loadingMore}
			<ServiceLoader />
			<ServiceLoader />
			<ServiceLoader />
		{/if}
	</div>
</PageContent>
