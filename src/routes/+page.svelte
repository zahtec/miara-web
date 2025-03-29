<script lang="ts">
	import Anchor from "$lib/components/Anchor.svelte";
	import MailIcon from "~icons/fluent/mail-16-filled";
	import StarIcon from "~icons/fluent/star-24-filled";
	import RocketIcon from "~icons/fluent/rocket-20-filled";
	import Section from "$lib/components/home/Section.svelte";
	import PlusIcon from "~icons/fluent/add-circle-16-filled";
	import Feature from "$lib/components/home/Feature.svelte";
	import LinkIcon from "~icons/fluent/link-multiple-20-filled";
	import CheckIcon from "~icons/fluent/checkmark-circle-16-filled";
	import SaveGraphic from "$lib/components/svgs/SaveGraphic.svelte";
	import ToolsIcon from "~icons/fluent/wrench-screwdriver-20-filled";
	import ShallowArrowIcon from "~icons/fluent/ios-arrow-rtl-24-filled";
	import FiltersGraphic from "$lib/components/svgs/FiltersGraphic.svelte";
	import PlatformGraphic from "$lib/components/svgs/PlatformGraphic.svelte";
	import DistrictGraphic from "$lib/components/svgs/DistrictGraphic.svelte";
	import LaunchStepGraphic from "$lib/components/svgs/LaunchStepGraphic.svelte";
	import ContactStepGraphic from "$lib/components/svgs/ContactStepGraphic.svelte";
	import IntegrationStepGraphic from "$lib/components/svgs/IntegrationStepGraphic.svelte";
	import VerificationStepGraphic from "$lib/components/svgs/VerificationStepGraphic.svelte";
</script>

<svelte:head>
	<title>Home — Miara</title>
</svelte:head>

<section
	id="hero"
	class="w-full -mt-20 pt-28 px-6 max-w-md mx-auto xs:max-w-screen-xl sm:pt-32 text-center sm:px-10 md:-mt-24 md:pt-44 xl:bg-[length:170rem]"
>
	<h1 class="text-5xl mt-4 font-extrabold mx-auto sm:mx-auto sm:text-6xl md:text-7xl lg:text-8xl">
		A homeless relief directory for Northern California*
	</h1>

	<p
		class="mt-4 text-lgmx-auto max-w-md mx-auto xs:max-w-md sm:max-w-lg sm:text-xl lg:text-2xl lg:max-w-xl"
	>
		Find, research, and contact local homelessness services that suit your needs with ease and
		speed.
	</p>

	<div class="max-w-sm mx-auto">
		<Anchor
			class="mt-8 !border-blue-400 border-2 bg-white text-black w-full sm:mt-10"
			href="/discover"
		>
			Search All Services
		</Anchor>
		<Anchor
			class="mt-4 !border-emerald-400 border-2 bg-white text-black w-full sm:mt-6"
			href="/guides"
		>
			District PDF Guides
		</Anchor>
		<Anchor
			class="mt-4 !border-red-400 border-2 bg-white text-black w-full sm:mt-6"
			href="/policy/santa-cruz"
		>
			Advocate for Policy Change
		</Anchor>
	</div>

	<i class="block mt-20 mb-10">
		*Miara is a work in progress. Currently, only Santa Cruz County is served.
	</i>
</section>

<Section
	class="bg-cream-100"
	id="features"
	title="Features"
	caption="An array of tools built to make finding and applying to homelessness relief services incredibly easy."
>
	<StarIcon slot="icon" class="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11" />

	<div
		class="flex flex-col gap-4 mt-8 xs:mt-10 xs:grid xs:grid-cols-2 xs:gap-3 sm:gap-6 md:flex lg:grid lg:gap-10"
	>
		<Feature
			name="Intuitive Interface"
			description="Enjoy Miara's easy-to-use interface that adapts to all devices, from phones to desktops."
			graphic={PlatformGraphic}
		/>

		<Feature
			name="Save for Later"
			description="Easily save services for later and then access and manage them from any device with a Miara account."
			graphic={SaveGraphic}
		/>

		<Feature
			name="Precise Filters"
			description="Find services that you are eligible for and that suit your needs with search filters."
			graphic={FiltersGraphic}
		/>

		<Feature
			name="District-Specific Guides"
			description="Use automatically generated and printable PDF guides to find services in your county district."
			graphic={DistrictGraphic}
		/>
	</div>

	<div class="flex flex-col gap-4 mt-8 sm:mt-10 lg:flex-row lg:gap-10">
		<Anchor class="bg-white text-black w-full" href="/discover">Use Miara Discover Now</Anchor>

		<Anchor class="bg-white text-black w-full" href="/discover">Explore District Guides</Anchor>
	</div>
</Section>

<Section
	id="partner"
	title="Partner"
	caption="List your services on Miara Discover to make everyone aware of the good you're providing."
>
	<PlusIcon slot="icon" class="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11" />

	<div class="flex mt-8 gap-4 relative xs:mt-10">
		<div class="flex flex-col items-center relative">
			<div
				class="w-12 h-12 shrink-0 bg-gray-600 rounded-full flex items-center justify-center z-10 sm:w-14 sm:h-14"
			>
				<MailIcon class="w-7 h-7 text-white translate sm:w-8 sm:h-8" />
			</div>

			<div
				class="w-0.5 shrink-0 h-full bg-gray-600 absolute xs:bg-gradient-to-b xs:from-gray-600 xs:to-emerald-600 xs:from-70%"
			></div>
		</div>

		<div
			class="w-full mt-2.5 mb-4 relative xs:mt-2 xs:mb-8 sm:mt-3 sm:mb-10 sm:flex sm:overflow-hidden sm:justify-between sm:gap-10"
		>
			<div>
				<h1 class="text-xl font-bold xs:text-2xl">Contact</h1>
				<p class="mt-2 max-w-xs xs:max-w-md sm:min-w-[28rem]">
					Email us with some basic information about your organization, a comprehensive list of the
					services your organization offers, and why you wish to partner with Miara.
				</p>
			</div>

			<ContactStepGraphic />

			<div
				class="absolute hidden w-0.5 inset-y-0 right-0 rounded-full my-auto bg-gray-600 shadow-sm shadow-gray-600 xs:block"
			></div>
		</div>
	</div>

	<div class="mx-[1.45rem] h-11 flex xs:hidden">
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square border-gray-600 border-l-2 border-b-2 rounded-bl-xl"
		></div>
		<div class="w-full h-0.5 my-auto bg-gradient-to-r from-gray-600 to-emerald-600"></div>
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square mt-auto border-emerald-600 border-t-2 border-r-2 rounded-tr-xl"
		></div>
	</div>

	<div class="flex relative text-right pt-4 gap-4 xs:text-left xs:flex-row-reverse">
		<div
			class="w-full mt-2.5 mb-4 relative xs:mt-2 xs:mb-8 sm:mt-3 sm:mb-10 sm:flex sm:overflow-hidden sm:justify-between sm:gap-10"
		>
			<div>
				<h1 class="text-xl font-bold xs:text-2xl">Verification</h1>
				<p class="mt-2 max-w-xs ml-auto xs:ml-0 xs:max-w-md sm:min-w-[28rem]">
					Miara and your organization will work together to ensure that your services are
					legitimate, vetted by the appropriate authorities, and meet Miara's standards for proper
					care.
				</p>
			</div>

			<VerificationStepGraphic />

			<div
				class="absolute hidden w-0.5 rounded-full right-0 inset-y-0 my-auto bg-emerald-600 shadow-sm shadow-emerald-600 xs:block"
			></div>
		</div>

		<div class="-mt-4 flex flex-col items-center relative">
			<div
				class="w-12 h-12 mt-4 shrink-0 bg-emerald-600 rounded-full flex items-center justify-center z-10 sm:w-14 sm:h-14"
			>
				<CheckIcon class="w-7 h-7 text-white translate sm:w-8 sm:h-8" />
			</div>

			<div
				class="w-0.5 shrink-0 h-full bg-emerald-600 absolute xs:bg-gradient-to-b xs:from-emerald-600 xs:to-violet-600 xs:from-70%"
			></div>
		</div>
	</div>

	<div class="mx-[1.45rem] h-11 flex xs:hidden">
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square mt-auto border-violet-600 border-l-2 border-t-2 rounded-tl-xl"
		></div>
		<div class="w-full h-0.5 my-auto bg-gradient-to-l from-emerald-600 to-violet-600"></div>
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square border-emerald-600 border-r-2 border-b-2 rounded-br-xl"
		></div>
	</div>

	<div class="flex pt-4 gap-4">
		<div class="-mt-4 flex flex-col items-center relative">
			<div
				class="w-12 h-12 mt-4 shrink-0 bg-violet-600 rounded-full flex items-center justify-center z-10 sm:w-14 sm:h-14"
			>
				<ToolsIcon class="w-7 h-7 text-white translate sm:w-8 sm:h-8" />
			</div>

			<div
				class="w-0.5 shrink-0 h-full bg-violet-600 absolute xs:bg-gradient-to-b xs:from-violet-600 xs:to-red-600 xs:from-70%"
			></div>
		</div>

		<div
			class="w-full mt-2.5 mb-4 relative xs:mt-2 xs:mb-8 sm:mt-3 sm:mb-10 sm:flex sm:overflow-hidden sm:justify-between sm:gap-10"
		>
			<div>
				<h1 class="text-xl font-bold xs:text-2xl">Integration</h1>
				<p class="mt-2 max-w-xs xs:max-w-md sm:min-w-[28rem]">
					If applicable, Miara will help your organization integrate with its application backend,
					allowing people to apply, manage, and track their applications to your service.
				</p>
			</div>

			<IntegrationStepGraphic />

			<div
				class="absolute hidden w-0.5 rounded-full right-0 inset-y-0 my-auto bg-violet-600 shadow-sm shadow-violet-600 xs:block"
			></div>
		</div>
	</div>

	<div class="mx-[1.45rem] h-11 flex xs:hidden">
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square border-violet-600 border-l-2 border-b-2 rounded-bl-xl"
		></div>
		<div class="w-full h-0.5 my-auto bg-gradient-to-r from-violet-600 to-red-600"></div>
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square mt-auto border-red-600 border-t-2 border-r-2 rounded-tr-xl"
		></div>
	</div>

	<div class="flex pt-4 text-right gap-4 xs:text-left xs:flex-row-reverse">
		<div
			class="w-full mt-2.5 relative xs:mt-2 sm:mt-3 sm:flex sm:overflow-hidden sm:justify-between sm:gap-10"
		>
			<div>
				<h1 class="text-xl font-bold xs:text-2xl">Launch</h1>
				<p class="mt-2 max-w-xs ml-auto xs:ml-0 xs:max-w-md sm:min-w-[28rem]">
					Complete and tested, Miara will make your organization's services availible for everyone.
					Later in Miara's life, new services will be featured at the top of the discover page.
				</p>
			</div>

			<LaunchStepGraphic />

			<div
				class="absolute hidden w-0.5 rounded-full right-0 inset-y-0 my-auto bg-red-600 shadow-sm shadow-red-600 xs:block"
			></div>
		</div>

		<div class="-mt-4 flex flex-col items-center relative">
			<div
				class="w-12 h-12 mt-4 shrink-0 bg-red-600 rounded-full flex items-center justify-center z-10 sm:w-14 sm:h-14"
			>
				<RocketIcon class="w-7 h-7 text-white translate sm:w-8 sm:h-8" />
			</div>

			<div class="w-0.5 shrink-0 h-5 bg-red-600 absolute"></div>
		</div>
	</div>
</Section>

<Section class="bg-cream-100" id="policy" title="Policy Advocacy" caption="">
	<LinkIcon slot="icon" class="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14" />

	<p class="mt-2 xs:text-lg">
		Miara also works on advocating for policies that help the unhoused and those at risk of becoming
		unhoused. Learn more about housing and development policies in your local area and fight for
		what you believe in to help our mission of preventing homelessness. We provide basic guides for
		specific counties outlining what you can do to help.
	</p>

	<Anchor class="mt-8 bg-white text-black w-full sm:mt-10" href="/policy/santa-cruz">Act Now</Anchor
	>
</Section>

<Section
	id="contact"
	title="Contact"
	caption="Talk to us about questions, concerns, or contributions. We'd love to hear from you."
>
	<MailIcon slot="icon" class="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11" />

	<a
		href="mailto:support@miara.app"
		target="_blank"
		class="rounded-xl p-4 font-bold flex items-center justify-between border-2 border-transparent bg-origin-border max-w-sm select-none mt-8 [background-clip:padding-box,border-box] xs:mt-10"
		style="background-image: linear-gradient(#fff,#fff), linear-gradient(to bottom right, #0f766e, #2dd4bf)"
	>
		<div class="flex gap-2">
			<MailIcon class="w-6 h-6" />

			<p>support@miara.app</p>
		</div>

		<ShallowArrowIcon class="ml-4 w-4 h-4" />
	</a>
</Section>
