<script lang="ts">
	import Anchor from "$lib/components/Anchor.svelte";
	import MailIcon from "~icons/fluent/mail-16-filled";
	import StarIcon from "~icons/fluent/star-24-filled";
	import Step from "$lib/components/home/Step.svelte";
	import RocketIcon from "~icons/fluent/rocket-20-filled";
	import PersonIcon from "~icons/fluent/person-16-filled";
	import Section from "$lib/components/home/Section.svelte";
	import LightningIcon from "~icons/fluent/flash-16-filled";
	import PlusIcon from "~icons/fluent/add-circle-16-filled";
	import Feature from "$lib/components/home/Feature.svelte";
	import BookmarkIcon from "~icons/fluent/bookmark-20-filled";
	import CollectIcon from "~icons/fluent/collections-16-filled";
	import HeroBackground from "$lib/images/hero-background.webp";
	import CheckIcon from "~icons/fluent/checkmark-circle-16-filled";
	import DocumentIcon from "~icons/fluent/document-text-16-filled";
	import MobileLandingImage from "$lib/images/landing-mobile.webp";
	import SaveGraphic from "$lib/components/svgs/SaveGraphic.svelte";
	import ToolsIcon from "~icons/fluent/wrench-screwdriver-20-filled";
	import DesktopLandingImage from "$lib/images/landing-desktop.webp";
	import CompassIcon from "~icons/fluent/compass-northwest-20-filled";
	import ShallowArrowIcon from "~icons/fluent/ios-arrow-rtl-24-filled";
	import StepsConnector from "$lib/components/svgs/StepsConnector.svelte";
	import FiltersGraphic from "$lib/components/svgs/FiltersGraphic.svelte";
	import PlatformGraphic from "$lib/components/svgs/PlatformGraphic.svelte";
	import LaunchStepGraphic from "$lib/components/svgs/LaunchStepGraphic.svelte";
	import ContactStepGraphic from "$lib/components/svgs/ContactStepGraphic.svelte";
	import ApplicationsGraphic from "$lib/components/svgs/ApplicationsGraphic.svelte";
	import IntegrationStepGraphic from "$lib/components/svgs/IntegrationStepGraphic.svelte";
	import VerificationStepGraphic from "$lib/components/svgs/VerificationStepGraphic.svelte";
</script>

<svelte:head>
	<title>Home — Miara</title>
</svelte:head>

<section
	class="w-full overflow-hidden bg-no-repeat bg-cover bg-center -mt-20 pt-28 px-6 mx-auto text-center sm:pt-32 sm:px-10 md:-mt-24 md:py-52 xl:bg-[length:170rem] bg-gray-900"
>
	<div class="max-w-md mx-auto xs:max-w-screen-xl">
		<div
			class="rounded-full border-1 select-none border-white py-1.5 px-2.5 text-sm font-semibold flex items-center justify-center gap-1 w-fit mx-auto sm:text-base lg:text-lg lg:py-1"
		>
			<CompassIcon class="w-5 h-5 sm:w-6 sm:h-6" />
			<p>Miara Discover</p>
		</div>

		<h1
			class="text-5xl mt-4 font-extrabold mx-auto xs:max-w-lg sm:text-6xl sm:max-w-[37rem] md:text-7xl md:max-w-[43rem] lg:text-8xl lg:max-w-[50rem]"
		>
			Santa Cruz's modern homeless relief directory
		</h1>

		<p
			class="text-lg text-gray-100 mt-4 mx-auto max-w-md xs:max-w-md sm:max-w-lg sm:text-xl lg:text-2xl lg:max-w-xl"
		>
			Find and contact homelessness services that suit your needs with ease and speed.
		</p>

		<Anchor class="mt-6 mx-auto border-none bg-blue-300 hover:bg-blue-400 text-black sm:mt-10" href="/discover">
			Discover Services
		</Anchor>

	</div>
</section>

<Section
	class="bg-gray-800"
	id="features"
	title="Features"
	caption="An array of tools built to make finding and applying to homelessness relief services incredibly easy."
>
	<StarIcon slot="icon" class="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11" />

	<div
		class="flex flex-col gap-8 mt-8 xs:mt-10 xs:grid xs:grid-cols-2 xs:gap-3 sm:gap-6 md:flex lg:grid lg:gap-10"
	>
		<Feature
			name="Swiftly Save"
			description="Easily save services for later and then access and manage them from any device with a Miara account."
			graphic={SaveGraphic}
		/>

		<Feature
			name="Intuitive Interface"
			description="Enjoy Miara's easy-to-use interface that adapts to all of your devices, from phones to desktops."
			graphic={PlatformGraphic}
		/>
	</div>
</Section>

<Section
	class="bg-gray-900"
	id="get-started"
	title="Get Started"
	caption="Begin discovering and applying to services in just a few simple steps on your mobile or desktop device."
>
	<LightningIcon slot="icon" class="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11" />

	<div
		class="flex flex-col gap-10 mt-8 relative overflow-hidden xs:mt-10 sm:grid sm:grid-cols-2 sm:gap-6 sm:justify-center"
	>
		<Step
			name="1"
			description="Use Miara Discover to search for and filter through homeless relief services. This does not require a Miara account."
			buttonLabel="Discover Services"
			buttonHref="/discover"
			icon={CompassIcon}
		/>

		<Step
			name="2"
			description="Sign up for a Miara account. With it, you can sync saved services across all your devices. All you need is an email."
			buttonLabel="Sign Up"
			buttonHref="/signup"
			icon={PersonIcon}
		/>

		<Step
			name="3"
			description="Save services that you plan on contacting later or showing to others!"
			buttonLabel="Saved Services"
			buttonHref="/saved"
			icon={BookmarkIcon}
		/>

		<Step
			name="4"
			description="Run into bugs, mistakes, or something you think could be improved? Let the Miara team know by contacting us."
			buttonLabel="Contact"
			buttonHref="#contact"
			icon={MailIcon}
		/>
	</div>
</Section>

<Section
	class="bg-gray-800"
	id="partner"
	title="Partner"
	caption="List your services on Miara and improve your organization's application experience."
>
	<PlusIcon slot="icon" class="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11" />

	<div class="flex mt-8 gap-4 relative xs:mt-10">
		<div class="flex flex-col items-center relative">
			<div
				class="w-12 h-12 shrink-0 bg-gray-900 rounded-full flex items-center justify-center shadow-lg z-10 sm:w-14 sm:h-14"
			>
				<MailIcon class="w-7 h-7 translate sm:w-8 sm:h-8 text-gray-100" />
			</div>

			<div
				class="w-0.5 shrink-0 h-full bg-gray-500 absolute"
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
				class="absolute hidden w-0.5 inset-y-0 right-0 rounded-full my-auto bg-gray-500 shadow-sm shadow-gray-600 xs:block"
			/>
		</div>
	</div>

	<div class="mx-[1.45rem] h-11 flex xs:hidden">
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square border-gray-500 border-l-2 border-b-2 rounded-bl-xl"
		/>
		<div class="w-full h-0.5 my-auto bg-gray-500" />
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square mt-auto border-gray-500 border-t-2 border-r-2 rounded-tr-xl"
		/>
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
				class="absolute hidden w-0.5 rounded-full right-0 inset-y-0 my-auto bg-gray-500 shadow-sm shadow-emerald-600 xs:block"
			/>
		</div>

		<div class="-mt-4 flex flex-col items-center relative">
			<div
				class="w-12 h-12 mt-4 shrink-0 bg-gray-900 rounded-full flex items-center justify-center shadow-lg z-10 sm:w-14 sm:h-14"
			>
				<CheckIcon class="w-7 h-7 translate sm:w-8 sm:h-8 text-gray-100" />
			</div>

			<div
				class="w-0.5 shrink-0 h-full bg-gray-500 absolute"
			></div>
		</div>
	</div>

	<div class="mx-[1.45rem] h-11 flex xs:hidden">
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square mt-auto border-gray-500 border-l-2 border-t-2 rounded-tl-xl"
		/>
		<div class="w-full h-0.5 my-auto bg-gray-500" />
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square border-gray-500 border-r-2 border-b-2 rounded-br-xl"
		/>
	</div>

	<div class="flex pt-4 gap-4">
		<div class="-mt-4 flex flex-col items-center relative">
			<div
				class="w-12 h-12 mt-4 shrink-0 bg-gray-900 rounded-full flex items-center justify-center shadow-lg z-10 sm:w-14 sm:h-14"
			>
				<ToolsIcon class="w-7 h-7 translate sm:w-8 sm:h-8 text-gray-100" />
			</div>

			<div
				class="w-0.5 shrink-0 h-full bg-gray-500 absolute"
			></div>
		</div>

		<div
			class="w-full mt-2.5 mb-4 relative xs:mt-2 xs:mb-8 sm:mt-3 sm:mb-10 sm:flex sm:overflow-hidden sm:justify-between sm:gap-10"
		>
			<div>
				<h1 class="text-xl font-bold xs:text-2xl">Integration</h1>
				<p class="mt-2 max-w-xs xs:max-w-md sm:min-w-[28rem]">
					Miara will help your organization integrate with its application backend, allowing people
					to apply, manage, and track their applications to your service.
				</p>
			</div>

			<IntegrationStepGraphic />

			<div
				class="absolute hidden w-0.5 rounded-full right-0 inset-y-0 my-auto bg-gray-500 shadow-sm shadow-gray-500 xs:block"
			/>
		</div>
	</div>

	<div class="mx-[1.45rem] h-11 flex xs:hidden">
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square border-gray-500 border-l-2 border-b-2 rounded-bl-xl"
		/>
		<div class="w-full h-0.5 my-auto bg-gray-500" />
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square mt-auto border-gray-500 border-t-2 border-r-2 rounded-tr-xl"
		/>
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
				class="absolute hidden w-0.5 rounded-full right-0 inset-y-0 my-auto bg-gray-500 shadow-sm xs:block"
			/>
		</div>

		<div class="-mt-4 flex flex-col items-center relative">
			<div
				class="w-12 h-12 mt-4 shrink-0 bg-gray-900 rounded-full flex items-center justify-center shadow-lg z-10 sm:w-14 sm:h-14"
			>
				<RocketIcon class="w-7 h-7 translate sm:w-8 sm:h-8 text-gray-100" />
			</div>

			<div class="w-0.5 shrink-0 h-5 bg-gray-500 absolute"></div>
		</div>
	</div>
</Section>

<Section
	class="bg-gray-900"
	id="contact"
	title="Contact"
	caption="Talk to us about questions, concerns, or contributions. We'd love to hear from you."
>
	<MailIcon slot="icon" class="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11" />

	<a
		href="mailto:support@miara.app"
		target="_blank"
		class="bg-blue-300 hover:bg-blue-400 text-black rounded-xl p-4 font-bold flex items-center justify-between max-w-sm select-none mt-8 xs:mt-10"
	>
		<div class="flex gap-2">
			<p>support@miara.app</p>
		</div>

		<ShallowArrowIcon class="ml-4 w-4 h-4" />
	</a>
</Section>