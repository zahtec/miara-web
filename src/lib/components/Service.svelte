<script lang="ts">
	import { onMount } from "svelte";
	import { user } from "$lib/state/user";
	import { fade } from "svelte/transition";
	import { getIcon } from "$lib/utils/icon";
	import { createEventDispatcher } from "svelte";
	import AddIcon from "~icons/fluent/add-12-filled";
	import Anchor from "$lib/components/Anchor.svelte";
	import MailIcon from "~icons/fluent/mail-16-filled";
	import GlobeIcon from "~icons/fluent/globe-16-filled";
	import BookmarkIcon from "~icons/fluent/bookmark-20-filled";

	import type { Save } from "$lib/types/api";
	import type { services } from "$lib/schemas/drizzle";

	const dispatch = createEventDispatcher<{
		change: {
			id: string;
			saved: boolean;
		};
	}>();

	export let service: typeof services.$inferSelect;

	let saved = false;
	let debounce: NodeJS.Timeout;

	const save = async () => {
		if ($user)
			await fetch("/api/discover", {
				method: "POST",
				body: JSON.stringify({
					serviceId: service.id,
					saved
				} satisfies Save.Request)
			});

		const ids: string[] | undefined = localStorage.getItem("saved")?.split(",");

		if (saved) {
			if (ids && ids.length) localStorage.setItem("saved", ids.concat([service.id]).join(","));
			else localStorage.setItem("saved", service.id);
		} else if (ids) localStorage.setItem("saved", ids.filter((id) => id !== service.id).join(","));

		dispatch("change", { id: service.id, saved });
	};

	onMount(
		() =>
			(saved =
				(localStorage.getItem("saved") as string | undefined)
					?.split(",")
					.some((id) => id === service.id) ?? false)
	);
</script>

<div
	in:fade|global={{ duration: 150, delay: 150 }}
	class="flex flex-col bg-neutral-900 relative rounded-xl p-4 overflow-hidden border-1 border-neutral-700 h-[26rem] xs:h-[31rem] xs:p-5 md:h-[20.35rem] lg:p-6"
>
	<div class="mb-auto md:flex md:mb-0">
		<img
			draggable="false"
			src={service.images[0]}
			class="-mt-4 -mx-4 w-[115%] h-48 object-cover select-none max-w-none xs:m-0 xs:w-full xs:rounded-lg xs:h-52 md:w-6/12 md:shrink-0 md:h-[12.3rem]"
			alt="Image of {service.name}"
		/>

		<div class="md:ml-6">
			<h1 class="overflow-ellipsis font-bold text-xl mt-4 line-clamp-2 xs:text-3xl xs:mt-5 md:mt-0">
				{service.name}
			</h1>

			<p
				class="overflow-ellipsis overflow-hidden line-clamp-3 mt-2 text-sm xs:text-base xs:mt-1 md:line-clamp-5"
			>
				{service.description}
			</p>
		</div>
	</div>

	{#if service.tags.length}
		<div
			class="absolute top-32 px-1.5 inset-x-0 flex gap-1.5 mt-6 overflow-auto w-full py-1.5 scrollbar-hidden xs:top-[10rem] xs:left-5 xs:w-[calc(100%-2.5rem)] md:static md:px-0 md:py-0 md:pt-7 md:mt-6 md:overflow-hidden md:inline-table md:w-full md:mb-auto md:border-neutral-600 md:border-t-1"
		>
			{#each service.tags.slice(0, 10) as tag}
				<div
					class="flex items-center gap-2 bg-neutral-800 rounded-lg px-3 py-1 shadow-black/40 shadow-sm xs:py-1.5 md:w-fit md:inline-block md:shadow-none md:mr-2 md:last:mr-0 md:mb-2"
				>
					<svelte:component this={getIcon(tag)} class="w-4 h-4 md:inline-block" />
					<p class="text-sm font-semibold md:inline-block">{tag}</p>
				</div>
			{/each}

			{#if service.tags.length > 10}
				<div
					class="flex items-center gap-2 bg-neutral-800 rounded-lg px-3 py-1 shadow-black/40 shadow-sm xs:py-1.5 md:w-fit md:inline-block md:shadow-none md:mr-2 md:last:mr-0 md:mb-2"
				>
					<AddIcon class="w-4 h-4 md:inline-block" />
					<p class="text-sm font-semibold md:inline-block">{service.tags.length - 8} More</p>
				</div>
			{/if}
		</div>
	{/if}

	<div
		class="flex justify-between font-semibold gap-4 mt-5 xs:justify-end md:border-t-1 md:border-neutral-600 md:pt-4 lg:justify-between"
	>
		{#if service.email}
			<Anchor
				target="_blank"
				href="mailto:{service.email}"
				icon={MailIcon}
				class="hidden !w-40 md:flex lg:!w-full"
			>
				Email
			</Anchor>
		{/if}

		{#if service.website}
			<Anchor
				target="_blank"
				href={service.website}
				icon={GlobeIcon}
				class="hidden !w-40 md:flex lg:!w-full"
			>
				Webiste
			</Anchor>
		{/if}

		<button
			class="relative border-1 select-none border-neutral-700 px-6 py-2.5 bg-neutral-800 rounded-lg flex gap-2 items-center justify-end w-1/2 xs:w-36 xs:py-3 md:w-40 lg:w-full"
			on:click={() => {
				clearTimeout(debounce);

				saved = !saved;

				setTimeout(save, 100);
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

		<Anchor
			href="/discover/{service.name.replaceAll(' ', '-').toLowerCase() + '-' + service.id}"
			class="!rounded-lg !w-1/2 !py-2.5 xs:!w-36 xs:!py-3 md:!w-40 lg:!w-full"
		>
			View
		</Anchor>
	</div>
</div>
