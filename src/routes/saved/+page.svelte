<script lang="ts">
	import { flip } from "svelte/animate";
	import { fade } from "svelte/transition";
	import { browser } from "$app/environment";
	import Banner from "$lib/components/Banner.svelte";
	import SearchBar from "$lib/components/SearchBar.svelte";
	import BookmarkIcon from "~icons/fluent/bookmark-20-filled";
	import PageContent from "$lib/components/PageContent.svelte";
	import ServiceComponent from "$lib/components/Service.svelte";
	import FilterMenu from "$lib/components/discover/FilterMenu.svelte";
	import FilterButton from "$lib/components/discover/FilterButton.svelte";
	import ServiceLoader from "$lib/components/discover/ServiceLoader.svelte";

	import type { PageData } from "./$types";
	import type { ComponentEvents } from "svelte";
	import type { services } from "$lib/schemas/drizzle";

	export let data: PageData;

	type Service = typeof services.$inferSelect;

	let offset = 0;
	let search = "";
	let max = false;
	let filterMenu: boolean;
	let loadingMore = false;
	let savedServices: Service[] = [];
	let promise: Promise<void> = new Promise(() => {});

	const unsave = ({ detail: { id, saved } }: ComponentEvents<ServiceComponent>["change"]) =>
		!saved && (savedServices = savedServices.filter((service) => service.id !== id));

	const concatServices = (services: Service[]) => (savedServices = savedServices.concat(services));

	$: if (search === undefined) {
		offset = 0;
		max = false;
		savedServices = [];
		loadingMore = false;

		promise = new Promise(() => {});
	} else if (browser) {
		if (data.saved.length) {
			localStorage.setItem("saved", data.saved.join(","));
			data.saved = [];
		}

		const ids = data.saved.length ? data.saved : localStorage.getItem("saved")?.split(",");

		if (!ids?.length) {
			max = true;
			promise = Promise.resolve();
		} else {
			loadingMore = offset > 0;

			const req = fetch(
				`/api/discover?search=${search}&offset=${offset}&${ids.map((id) => `ids=${id}`).join("&")}`
			).then(async (res) => {
				const services = (await res.json()) as Service[];

				if (services.length) concatServices(services);
				else max = true;

				loadingMore = false;
			});

			if (!offset) promise = req;
		}
	}
</script>

<svelte:head>
	<title>Saved — Miara</title>
</svelte:head>

<svelte:window
	on:scroll|passive|trusted={() =>
		window.scrollY / document.body.clientHeight > 0.5 && !max && !loadingMore && (offset += 10)}
/>

<Banner
	title="Saved"
	description="View the homelessness services you saved for later."
	icon={BookmarkIcon}
	class="from-green-950 to-green-700"
/>

<PageContent class="max-w-screen-md md:py-8 lg:flex lg:gap-8 lg:justify-center lg:max-w-primary">
	<div class="hidden border-r-1 border-neutral-700 pr-8 w-52 shrink-0 lg:block xl:w-60">
		<h1 class="font-bold text-2xl">Filters</h1>
		<p class="mt-1">An error occured.</p>
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
			{#if savedServices.length}
				{#each savedServices as service (service.id)}
					<div animate:flip={{ duration: 150 }} out:fade|global={{ duration: 200 }}>
						<ServiceComponent {service} on:change={unsave} />
					</div>
				{/each}
			{:else}
				<p in:fade|global={{ duration: 150, delay: 170 }} class="font-semibold text-lg text-center">
					You have no saved services.
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
