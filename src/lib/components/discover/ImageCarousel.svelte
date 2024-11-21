<script lang="ts">
	import { PUBLIC_CF_IMAGES_URL } from "$env/static/public";
	import { onMount } from "svelte";
	import ShallowArrowIcon from "~icons/fluent/ios-chevron-right-20-filled";

	export let images: string[];
	export let serviceName: string;

	const enum Overlay {
		None,
		Left,
		Right,
		Both
	}

	let image = 0;
	let overlay = Overlay.None;
	let selectDiv: HTMLDivElement;
	let carouselDiv: HTMLDivElement;

	const scroll = () => {
		if (!selectDiv) return;

		if (window.innerWidth >= selectDiv.scrollWidth) overlay = Overlay.None;
		else if (selectDiv.scrollLeft === 0) overlay = Overlay.Right;
		else if (selectDiv.scrollLeft + selectDiv.clientWidth >= selectDiv.scrollWidth)
			overlay = Overlay.Left;
		else overlay = Overlay.Both;
	};

	onMount(() => {
		if (selectDiv) selectDiv.scrollTo({ left: 0 });

		scroll();

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting)
					image = parseInt(entries[0].target.attributes.getNamedItem("data-index")!.value);
			},
			{ threshold: 0.7 }
		);

		for (const child of carouselDiv.children) {
			observer.observe(child);
		}

		return () => observer.disconnect();
	});
</script>

<svelte:window on:resize={scroll} />

<div class="relative max-w-primary w-full mx-auto">
	<div
		class="xs:overflow-hidden xs:mx-6 xs:rounded-xl sm:mx-10 md:after:backdrop-blur-[1.5px] md:after:h-24 md:after:inset-x-9 md:after:absolute md:after:-bottom-1 md:after:rounded-b-lg md:after:gradient-mask-t-10 md:after:bg-black"
	>
		<div
			bind:this={carouselDiv}
			class="flex overflow-auto scrollbar-hidden snap-x snap-mandatory scroll-auto md:overflow-hidden"
		>
			{#each images as id, i}
				<img
					src="{PUBLIC_CF_IMAGES_URL}/{id}/public"
					data-index={i}
					draggable="false"
					alt="Image of {serviceName}"
					class="object-cover w-full h-56 shrink-0 select-none snap-center xs:h-72 sm:h-80 md:h-96 lg:h-[26rem]"
				/>
			{/each}
		</div>
	</div>

	{#if images.length > 1}
		<div
			class="relative pt-6 md:bottom-0 md:absolute md:inset-x-10 md:pt-0 md:h-24 md:rounded-b-xl md:overflow-hidden"
		>
			<div
				class:opacity-100={overlay === Overlay.Both || overlay === Overlay.Left}
				class="absolute flex left-0 top-6 h-18 w-24 bg-gradient-to-r from-black to-transparent from-[28%] opacity-0 transition-opacity duration-200 pointer-events-none xs:h-20 md:top-1.5"
			>
				<button
					on:click={() =>
						selectDiv.scroll({ left: selectDiv.scrollLeft - 100, behavior: "smooth" })}
					class="my-auto ml-2 w-4 pointer-events-auto"
				>
					<ShallowArrowIcon class="w-8 h-8 rotate-180 md:shadow-sm" />
				</button>
			</div>

			<div
				bind:this={selectDiv}
				on:scroll={scroll}
				class="flex items-center gap-4 px-6 overflow-auto scrollbar-hidden snap-mandatory snap-x sm:px-10 md:gap-2 md:px-2 md:pt-1.5"
			>
				{#each images as src, i}
					<button
						on:click={() => {
							image = i;
							carouselDiv.scroll({ left: image * carouselDiv.clientWidth });
						}}
						class="shrink-0 snap-center"
					>
						<img
							class:border-opacity-0={image !== i}
							{src}
							draggable="false"
							alt="Image of {serviceName}"
							class="object-cover w-28 h-18 select-none rounded-xl cursor-pointer border-2 border-white transition-border xs:w-32 xs:h-20"
						/>
					</button>
				{/each}
			</div>

			<div
				class:opacity-100={overlay === Overlay.Both || overlay === Overlay.Right}
				class="absolute flex justify-end right-0 top-6 h-18 w-24 bg-gradient-to-r from-transparent to-black to-[72%] opacity-0 transition-opacity duration-200 pointer-events-none xs:h-20 md:top-1.5"
			>
				<button
					on:click={() =>
						selectDiv.scroll({ left: selectDiv.scrollLeft + 100, behavior: "smooth" })}
					class="my-auto w-4 flex justify-end mr-2 pointer-events-auto"
				>
					<ShallowArrowIcon class="w-8 h-8 shrink-0" />
				</button>
			</div>
		</div>
	{/if}
</div>
