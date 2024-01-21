<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import { slide } from "svelte/transition";
	import { onNavigate } from "$app/navigation";
	import { scrollToTop } from "$lib/utils/scroll";
	import MailIcon from "~icons/fluent/mail-16-filled";
	import StarIcon from "~icons/fluent/star-24-filled";
	import HomeIcon from "~icons/fluent/home-12-filled";
	import MobileLink from "./header/MobileLink.svelte";
	import PowerIcon from "~icons/fluent/power-24-filled";
	import DesktopLink from "./header/DesktopLink.svelte";
	import PersonIcon from "~icons/fluent/person-16-filled";
	import PlusIcon from "~icons/fluent/add-circle-16-filled";
	import LightningIcon from "~icons/fluent/flash-16-filled";
	import BookmarkIcon from "~icons/fluent/bookmark-20-filled";
	import SettingsIcon from "~icons/fluent/settings-20-filled";
	import ArrowIcon from "~icons/fluent/arrow-right-12-filled";
	import DocumentIcon from "~icons/fluent/document-text-16-filled";
	import CompassIcon from "~icons/fluent/compass-northwest-20-filled";
	import ShallowArrowIcon from "~icons/fluent/ios-arrow-rtl-24-filled";

	// TODO: Replace with actual login state
	const loggedIn = false;

	const menuOpen = writable(false);
	const toggleMenu = () => menuOpen.update((open) => !open);

	let homeSubMenu = false;
	let headerBackground = false;

	onMount(() => {
		menuOpen.subscribe((open) => document.body.classList.toggle("max-md:overflow-hidden", open));

		addEventListener(
			"scroll",
			() => (window.scrollY > 0 ? (headerBackground = true) : (headerBackground = false)),
			{
				passive: true
			}
		);

		if (window.scrollY > 0) headerBackground = true;
		else headerBackground = false;
	});

	onNavigate(() => {
		menuOpen.set(false);
		homeSubMenu = false;
	});
</script>

<svelte:window on:resize={() => window.innerWidth >= 800 && menuOpen.set(false)} />

<nav class="sticky top-0 z-50 h-20">
	<div
		class:bg-opacity-0={!headerBackground && !$menuOpen}
		class:bg-opacity-60={headerBackground && !$menuOpen}
		class:bg-opacity-100={$menuOpen}
		class:border-opacity-0={!headerBackground}
		class:border-opacity-100={headerBackground && !$menuOpen}
		class:backdrop-opacity-0={!headerBackground}
		class="absolute top-0 inset-x-0 overflow-hidden transition-[backdrop-filter,background-color,height,border] p-6 h-20 bg-black backdrop-blur-lg border-b-1 border-neutral-800 duration-200 will-change-contents sm:px-10 md:overflow-visible lg:py-5 md:h-20 {$menuOpen
			? 'h-screen'
			: 'h-0'}"
	>
		<div
			class="flex items-center justify-between select-none mx-auto my-1 max-w-md xs:max-w-primary lg:my-0.5"
		>
			<a href="/" class="font-black text-2xl leading-none tracking-tighter lg:text-3xl">MIARA</a>

			<div
				on:click={toggleMenu}
				on:keydown={({ key }) => key === "Enter" && toggleMenu()}
				role="button"
				tabindex="0"
				class="md:hidden"
			>
				<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
					<path
						d="M0 18.5a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2Z"
						class="origin-center transition-transform"
						style={$menuOpen ? "transform: rotate(-45deg) translateY(-7.5px)" : ""}
					/>

					<path
						d="M0 11a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5A.5.5 0 0 1 0 13v-2Z"
						class:opacity-0={$menuOpen}
						class="origin-center transition-opacity"
					/>

					<path
						d="M0 3.5A.5.5 0 0 1 .5 3h23a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2Z"
						class="origin-center transition-transform"
						style={$menuOpen ? "transform: rotate(45deg) translateY(7.5px)" : ""}
					/>
				</svg>
			</div>

			<div class="hidden relative leading-none font-medium md:flex md:gap-6 lg:gap-8">
				<a href="/" class="flex gap-1 items-center peer" on:click={scrollToTop}>
					<HomeIcon class="w-4 h-4" />
					<p>Home</p>
				</a>

				<div
					class="hidden absolute top-4 pt-3 -left-[2.92rem] transition-[opacity,transform] pointer-events-none scale-95 opacity-0 md:flex md:peer-hover:scale-100 md:peer-hover:opacity-100 md:peer-hover:pointer-events-auto md:hover:scale-100 md:hover:opacity-100 md:hover:pointer-events-auto"
				>
					<div
						class="w-40 h-44 bg-black p-5 border-1 border-neutral-800 rounded-xl shadow-black/50 shadow-md flex flex-col gap-6"
					>
						<a href="/#features" class="flex gap-1.5 items-center">
							<StarIcon class="w-4 h-4" />
							<p>Features</p>
						</a>

						<a href="/#get-started" class="flex gap-1.5 items-center">
							<LightningIcon class="w-4 h-4" />
							<p>Get Started</p>
						</a>

						<a href="/#partner" class="flex gap-1.5 items-center">
							<PlusIcon class="w-4 h-4" />
							<p>Partner</p>
						</a>

						<a href="/#contact" class="flex gap-1.5 items-center">
							<MailIcon class="w-4 h-4" />
							<p>Contact</p>
						</a>
					</div>
				</div>

				<DesktopLink icon={CompassIcon} name="Discover" href="/discover" />
				<DesktopLink icon={BookmarkIcon} name="Saved" href="/saved" />

				{#if loggedIn}
					<DesktopLink icon={SettingsIcon} name="Account" href="/settings" />
					<DesktopLink icon={DocumentIcon} name="My Applications" href="/applications" />
					<DesktopLink icon={PowerIcon} name="Logout" href="/logout" />
				{:else}
					<DesktopLink icon={PersonIcon} name="Login" href="/login" />
				{/if}
			</div>
		</div>

		<div
			class:opacity-0={!$menuOpen}
			class:duration-200={$menuOpen}
			class:delay-75={$menuOpen}
			class="flex flex-col pt-8 text-xl h-screen divide-y max-w-md mx-auto divide-neutral-700 font-semibold xs:max-w-none md:hidden transition-opacity"
		>
			<div>
				<button
					class="flex gap-2 items-center py-4 w-full"
					on:click={() => (homeSubMenu = !homeSubMenu)}
				>
					<HomeIcon class="w-6 h-6" />

					<p class="leading-none">Home</p>

					<ShallowArrowIcon
						class="w-5 h-5 ml-auto transition-transform duration-100 {homeSubMenu
							? 'rotate-90'
							: ''}"
					/>
				</button>

				{#if homeSubMenu}
					<div class="ml-1.5 -mt-1 pb-2" transition:slide={{ duration: 100 }}>
						<a
							on:click={() => {
								toggleMenu();
								scrollToTop();
							}}
							href="/"
							class="flex gap-2 items-center py-2 w-full"
						>
							<ArrowIcon class="w-5 h-5" />
							<p class="text-sm">Go</p>
						</a>

						<a href="/#features" class="flex gap-2 items-center py-2 w-full" on:click={toggleMenu}>
							<StarIcon class="w-5 h-5" />
							<p class="text-sm">Features</p>
						</a>

						<a
							href="/#get-started"
							class="flex gap-2 items-center py-2 w-full"
							on:click={toggleMenu}
						>
							<LightningIcon class="w-5 h-5" />
							<p class="text-sm">How it Works</p>
						</a>

						<a href="/#partner" class="flex gap-2 items-center py-2 w-full" on:click={toggleMenu}>
							<PlusIcon class="w-5 h-5" />
							<p class="text-sm">Partner</p>
						</a>

						<a href="/#contact" class="flex gap-2 items-center py-2 w-full" on:click={toggleMenu}>
							<MailIcon class="w-5 h-5" />
							<p class="text-sm">Contact</p>
						</a>
					</div>
				{/if}
			</div>

			<MobileLink icon={CompassIcon} name="Discover" href="/discover" />
			<MobileLink icon={BookmarkIcon} name="Saved" href="/saved" />

			{#if loggedIn}
				<MobileLink icon={SettingsIcon} name="Account" href="/settings" />
				<MobileLink icon={DocumentIcon} name="My Applications" href="/applications" />
				<MobileLink icon={PowerIcon} name="Logout" href="/logout" />
			{:else}
				<MobileLink icon={PersonIcon} name="Login" href="/login" />
			{/if}
		</div>
	</div>
</nav>
