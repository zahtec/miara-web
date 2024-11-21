<script lang="ts">
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import { user } from "$lib/state/user";
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
	import ScriptIcon from "~icons/fluent/script-16-filled";
	import PlusIcon from "~icons/fluent/add-circle-16-filled";
	import DocumentIcon from "~icons/fluent/document-20-filled";
	import BookmarkIcon from "~icons/fluent/bookmark-20-filled";
	import SettingsIcon from "~icons/fluent/settings-20-filled";
	import ArrowIcon from "~icons/fluent/arrow-right-12-filled";
	import LinkIcon from "~icons/fluent/link-multiple-20-filled";
	import CompassIcon from "~icons/fluent/compass-northwest-20-filled";
	import ShallowArrowIcon from "~icons/fluent/ios-arrow-rtl-24-filled";

	let menuOpen = $state(false);
	const toggleMenu = () => (menuOpen = !menuOpen);

	let homeSubMenu = $state(false);
	let headerBackground = $state(false);

	let textWhite = $derived($page.url.pathname !== "/" && !headerBackground && !menuOpen);

	$effect(() => {
		document.body.classList.toggle("max-md:overflow-hidden", menuOpen);
	});

	onMount(() => {
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
		menuOpen = false;
		homeSubMenu = false;
	});
</script>

<svelte:window on:resize={() => window.innerWidth >= 800 && (menuOpen = false)} />

<nav class="sticky top-0 z-50 h-20">
	<div
		class:bg-opacity-0={!headerBackground && !menuOpen}
		class:bg-opacity-80={headerBackground && !menuOpen}
		class:bg-opacity-100={menuOpen}
		class:border-opacity-0={!headerBackground}
		class:border-opacity-100={headerBackground && !menuOpen}
		class:backdrop-opacity-0={!headerBackground}
		class="absolute top-0 inset-x-0 overflow-hidden transition-[backdrop-filter,background-color,height,border] p-6 h-20 bg-white backdrop-blur-lg border-b-1 border-neutral-800 duration-200 will-change-contents sm:px-10 md:overflow-visible lg:py-5 md:h-20 {menuOpen
			? 'h-screen'
			: 'h-0'}"
	>
		<div
			class="flex items-center justify-between select-none mx-auto my-1 max-w-md xs:max-w-primary lg:my-0.5"
		>
			<a
				href="/"
				class:text-white={textWhite}
				class="font-black text-2xl leading-none tracking-tighter transition-colors lg:text-3xl"
				>MIARA</a
			>

			<div
				onclick={toggleMenu}
				onkeydown={({ key }) => key === "Enter" && toggleMenu()}
				role="button"
				tabindex="0"
				class="md:hidden transition-colors"
				class:text-white={textWhite}
			>
				<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
					<path
						d="M0 18.5a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2Z"
						class="origin-center transition-transform"
						style={menuOpen ? "transform: rotate(-45deg) translateY(-7.5px)" : ""}
					/>

					<path
						d="M0 11a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5A.5.5 0 0 1 0 13v-2Z"
						class:opacity-0={menuOpen}
						class="origin-center transition-opacity"
					/>

					<path
						d="M0 3.5A.5.5 0 0 1 .5 3h23a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2Z"
						class="origin-center transition-transform"
						style={menuOpen ? "transform: rotate(45deg) translateY(7.5px)" : ""}
					/>
				</svg>
			</div>

			<div
				class:text-white={textWhite}
				class="hidden relative leading-none transition-colors font-medium md:flex md:gap-6 lg:gap-8"
			>
				<a href="/" class="flex gap-1 items-center peer" onclick={scrollToTop}>
					<HomeIcon class="w-4 h-4" />
					<p>Home</p>
				</a>

				<div
					class="hidden absolute top-4 pt-3 -left-[4rem] transition-[opacity,transform] pointer-events-none scale-95 opacity-0 md:flex md:peer-hover:scale-100 md:peer-hover:opacity-100 md:peer-hover:pointer-events-auto md:hover:scale-100 md:hover:opacity-100 md:hover:pointer-events-auto"
				>
					<div
						class="relative w-48 h-44 bg-white p-5 border-1 border-neutral-800 rounded-xl shadow-black/50 shadow-md flex flex-col gap-6 text-black"
					>
						<a href="/#features" class="flex gap-1.5 items-center">
							<StarIcon class="w-4 h-4" />
							<p>Features</p>
						</a>

						<a href="/#partner" class="flex gap-1.5 items-center">
							<PlusIcon class="w-4 h-4" />
							<p>Partner</p>
						</a>

						<a href="/#policy" class="flex gap-1.5 items-center">
							<LinkIcon class="w-4 h-4" />
							<p>Policy Advocacy</p>
						</a>

						<a href="/#contact" class="flex gap-1.5 items-center">
							<MailIcon class="w-4 h-4" />
							<p>Contact</p>
						</a>
					</div>
				</div>

				<DesktopLink icon={CompassIcon} name="Discover" href="/discover" />
				<DesktopLink icon={BookmarkIcon} name="Saved" href="/saved" />
				<DesktopLink icon={DocumentIcon} name="District Guides" href="/guides" />
				<DesktopLink icon={ScriptIcon} name="Policy Advocacy" href="/policy/santa-cruz" />

				{#if $user}
					<DesktopLink icon={SettingsIcon} name="Account" href="/account" />
					<DesktopLink icon={PowerIcon} name="Log Out" href="/logout" />
				{:else}
					<DesktopLink icon={PersonIcon} name="Login" href="/login" />
				{/if}
			</div>
		</div>

		<div
			class:opacity-0={!menuOpen}
			class:duration-200={menuOpen}
			class:delay-75={menuOpen}
			class="flex flex-col pt-8 text-xl h-screen divide-y max-w-md mx-auto divide-neutral-700 font-semibold xs:max-w-none md:hidden transition-opacity"
		>
			<div>
				<button
					class="flex gap-2 items-center py-4 w-full"
					onclick={() => (homeSubMenu = !homeSubMenu)}
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
							onclick={() => {
								toggleMenu();
								scrollToTop();
							}}
							href="/"
							class="flex gap-2 items-center py-2 w-full"
						>
							<ArrowIcon class="w-5 h-5" />
							<p class="text-sm">Go</p>
						</a>

						<a href="/#features" class="flex gap-2 items-center py-2 w-full" onclick={toggleMenu}>
							<StarIcon class="w-5 h-5" />
							<p class="text-sm">Features</p>
						</a>

						<a href="/#partner" class="flex gap-2 items-center py-2 w-full" onclick={toggleMenu}>
							<PlusIcon class="w-5 h-5" />
							<p class="text-sm">Partner</p>
						</a>

						<a href="/#policy" class="flex gap-2 items-center py-2 w-full" onclick={toggleMenu}>
							<LinkIcon class="w-5 h-5" />
							<p class="text-sm">Policy Advocacy</p>
						</a>

						<a href="/#contact" class="flex gap-2 items-center py-2 w-full" onclick={toggleMenu}>
							<MailIcon class="w-5 h-5" />
							<p class="text-sm">Contact</p>
						</a>
					</div>
				{/if}
			</div>

			<MobileLink icon={CompassIcon} name="Discover" href="/discover" />
			<MobileLink icon={BookmarkIcon} name="Saved" href="/saved" />
			<MobileLink icon={DocumentIcon} name="District Guides" href="/guides" />
			<MobileLink icon={ScriptIcon} name="Policy Advocacy" href="/policy/santa-cruz" />

			{#if $user}
				<MobileLink icon={SettingsIcon} name="Account" href="/account" />
				<MobileLink icon={PowerIcon} name="Log Out" href="/logout" />
			{:else}
				<MobileLink icon={PersonIcon} name="Log In" href="/login" />
			{/if}
		</div>
	</div>
</nav>
