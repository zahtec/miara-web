<script lang="ts">
	import { onMount } from "svelte";
	import { getIcon } from "$lib/utils/icon";
	import Button from "$lib/components/Button.svelte";
	import MailIcon from "~icons/fluent/mail-16-filled";
	import PhoneIcon from "~icons/fluent/call-16-filled";
	import GlobeIcon from "~icons/fluent/globe-16-filled";
	import PinIcon from "~icons/fluent/location-12-filled";
	import BookmarkIcon from "~icons/fluent/bookmark-20-filled";
	import PageContent from "$lib/components/PageContent.svelte";
	import ShallowArrowIcon from "~icons/fluent/ios-chevron-right-20-filled";
	import ImageCarousel from "$lib/components/discover/ImageCarousel.svelte";
	import ServiceContactMethod from "$lib/components/discover/ServiceContactMethod.svelte";

	import type { PageData } from "./$types";
	import type { Save } from "$lib/types/api";

	export let data: PageData;

	let saved = false;
	let debounce: NodeJS.Timeout;

	const save = async () => {
		const cookieStore = (await import("cookie-store")).cookieStore;

		if (data.user) {
			fetch("/api/discovery", {
				method: "POST",
				body: JSON.stringify({
					serviceId: data.id,
					saved
				} satisfies Save.Request)
			});
		} else {
			const storage = await cookieStore.get("saved");

			if (saved) {
				if (storage)
					await cookieStore.set("saved", storage.value.split(",").concat([data.id]).join(","));
				else await cookieStore.set("saved", data.id);
			} else if (storage)
				await cookieStore.set(
					"saved",
					storage.value
						.split(",")
						.filter((id) => id !== data.id)
						.join(",")
				);
		}
	};

	onMount(async () => {
		const cookieStore = (await import("cookie-store")).cookieStore;

		saved =
			(await cookieStore.get("saved"))?.value.split(",").some((id) => id === data.id) ?? false;
	});

	// TODO: Save search on back
</script>

<a
	href="/discover"
	class="flex items-center select-none max-w-primary mx-auto w-full font-semibold mt-2 mb-4 pl-4 xs:mb-4 xs:mt-6 xs:pl-6 sm:pl-10 md:my-5"
>
	<ShallowArrowIcon class="w-7 h-7 rotate-180" />
	<p class="-ml-1">Back to Discover</p>
</a>

<ImageCarousel images={data.images} serviceName={data.name} />

<PageContent class="md:mt-4">
	<div class="md:flex md:gap-8">
		<div class="md:w-full">
			<h1 class="font-bold text-3xl xs:text-4xl lg:text-5xl">{data.name}</h1>
			<p class="ml-[0.05rem] mt-1 xs:text-lg xs:ml-[0.07rem] lg:text-xl lg:mt-2 lg:ml-[0.09rem]">
				{data.description}
			</p>
		</div>

		<div class="flex gap-4 my-6 w-full xs:my-8 md:flex-col md:my-0 md:w-fit md:shrink-0">
			<button
				class="font-semibold w-full select-none relative border-1 border-neutral-700 px-6 py-3 bg-neutral-800 rounded-xl flex gap-2 items-center justify-end md:w-40 md:py-3.5"
				on:click={() => {
					clearTimeout(debounce);

					saved = !saved;

					setTimeout(save, 300);
				}}
			>
				<p
					class:opacity-0={saved}
					class:delay-150={!saved}
					class="absolute left-6 transition-opacity"
				>
					Save
				</p>

				<p
					class:opacity-0={!saved}
					class:delay-150={saved}
					class="absolute left-6 transition-opacity"
				>
					Saved
				</p>

				<BookmarkIcon
					class="w-5 h-5 transition-colors stroke-1 {saved
						? 'stroke-transparent'
						: 'text-transparent stroke-white'}"
				/>
			</button>

			<Button
				label="Apply"
				href="/apply/{data.id}"
				class="!bg-blue-800 !border-blue-700 w-full md:w-40"
			/>
		</div>
	</div>

	<h1 class="text-xl font-semibold xs:text-2xl md:mt-10 lg:text-3xl lg:mt-14">About</h1>
	<p class="xs:text-lg xs:mt-0.5 lg:text-xl lg:mt-1">{data.about}</p>

	<h1 class="text-xl font-semibold mt-6 xs:text-2xl xs:mt-8 lg:text-3xl lg:mt-14">Requirements</h1>
	<p class="xs:text-lg xs:mt-0.5 lg:text-xl lg:mt-1">
		This service/program requires you to meet the following criteria:
	</p>

	<ul class="mt-2 list-disc ml-4 xs:text-lg lg:text-xl">
		{#each data.requirements as requirement}
			<li>
				{requirement}
			</li>
		{/each}
	</ul>

	{#if data.tags.length}
		<h1 class="text-xl font-semibold mt-6 xs:text-2xl xs:mt-8 lg:text-3xl lg:mt-14">Tags</h1>

		<div class="inline-table w-full mt-2 lg:mt-4">
			{#each data.tags as tag}
				<div class="inline-block mr-2 mb-2 last:mr-0 lg:mr-3 lg:mb-3">
					<div
						class="flex items-center gap-2 bg-neutral-800 rounded-lg px-3 py-1 xs:py-1.5 xs:px-4 lg:py-3 lg:px-5"
					>
						<svelte:component
							this={getIcon(tag)}
							class="w-4 h-4 inline-block mb-0.5 xs:w-5 xs:h-5"
						/>
						<p class="text-sm font-semibold inline-block xs:text-base">{tag}</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	<h1 class="text-xl font-semibold mt-4 xs:text-2xl xs:mt-6 lg:text-3xl lg:mt-14">Contact</h1>

	<div
		class="flex flex-col -mt-1 divide-y divide-neutral-700 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:divide-none lg:mt-0"
	>
		{#if data.email}
			<ServiceContactMethod icon={MailIcon} href="mailto:{data.email}" value={data.email} />
		{/if}

		{#if data.phone}
			<ServiceContactMethod
				icon={PhoneIcon}
				href="tel:{data.phone.slice(3, 13)}"
				value="({data.phone.slice(3, 6)}) {data.phone.slice(6, 9)}-{data.phone.slice(9, 13)}"
			/>
		{/if}

		{#if data.website}
			<ServiceContactMethod icon={GlobeIcon} href={data.website} value={data.website} />
		{/if}

		{#if data.address}
			<ServiceContactMethod
				icon={PinIcon}
				href="http://maps.google.com/?q={data.address}"
				value={data.address}
			/>
		{/if}
	</div>
</PageContent>
