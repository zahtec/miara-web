<script lang="ts">
	import Button from "$lib/components/Button.svelte";
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
	import ContactMethod from "$lib/components/home/ContactMethod.svelte";
	import StepsConnector from "$lib/components/svgs/StepsConnector.svelte";
	import FiltersGraphic from "$lib/components/svgs/FiltersGraphic.svelte";
	import PlatformGraphic from "$lib/components/svgs/PlatformGraphic.svelte";
	import LaunchStepGraphic from "$lib/components/svgs/LaunchStepGraphic.svelte";
	import ContactStepGraphic from "$lib/components/svgs/ContactStepGraphic.svelte";
	import ApplicationsGraphic from "$lib/components/svgs/ApplicationsGraphic.svelte";
	import IntegrationStepGraphic from "$lib/components/svgs/IntegrationStepGraphic.svelte";
	import VerificationStepGraphic from "$lib/components/svgs/VerificationStepGraphic.svelte";
</script>

<section
	class="w-full overflow-hidden bg-no-repeat bg-cover bg-center -mt-20 pt-28 px-6 -hue-rotate-30 mx-auto text-center sm:pt-32 sm:px-10 md:-mt-24 md:py-52 xl:bg-[length:170rem]"
	style="background-image: url({HeroBackground});"
>
	<div class="max-w-md mx-auto xs:max-w-[2000px]">
		<div
			class="rounded-full border-1 select-none border-white py-1.5 px-2.5 text-sm font-semibold flex items-center justify-center gap-1 w-fit mx-auto sm:text-base lg:text-lg lg:py-1"
		>
			<CompassIcon class="w-5 h-5 sm:w-6 sm:h-6" />
			<p>Miara Discover</p>
		</div>

		<h1
			class="text-5xl mt-4 font-extrabold mx-auto xs:max-w-lg sm:text-6xl sm:max-w-[37rem] md:text-7xl md:max-w-[43rem] lg:text-8xl lg:max-w-[50rem]"
		>
			California's new homeless relief directory
		</h1>

		<p
			class="text-lg text-gray-100 mt-4 mx-auto max-w-md xs:max-w-md sm:max-w-lg sm:text-xl lg:text-2xl lg:max-w-xl"
		>
			Find, contact, and apply to homelessness services that suit your needs with ease and speed.
		</p>

		<Button
			label="Discover Services"
			class="mt-6 mx-auto border-none bg-white text-black sm:mt-10"
			href="/discover"
		/>

		<img
			class="aspect-[9/16] w-full max-w-sm rounded-xl mt-16 -mb-20 hue-rotate-30 shadow-lg shadow-black/30 mx-auto xs:-mb-32 xs:max-w-md xs:w-full xs:h-auto xs:mt-14 sm:-mb-60 sm:max-w-lg sm:mt-24 md:hidden"
			src={MobileLandingImage}
			alt="Miara mobile discovery page"
		/>

		<img
			class="hidden aspect-video w-full rounded-xl h-auto mx-auto shadow-lg shadow-black/30 hue-rotate-30 md:block mt-28 max-w-screen-xl"
			src={DesktopLandingImage}
			alt="Miara mobile discovery page"
		/>
	</div>
</section>

<Section
	class="bg-gray-900"
	id="features"
	title="Features"
	caption="An array of tools built to make finding and applying to homelessness relief services incredibly easy."
>
	<StarIcon slot="icon" class="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11" />

	<div
		class="flex flex-col gap-8 mt-8 xs:mt-10 xs:grid xs:grid-cols-2 xs:gap-3 sm:gap-6 md:flex lg:grid lg:gap-10"
	>
		<Feature
			name="Precise Filters"
			description="Find services that you are eligible for and that suit your needs with search filters offered by no other directory."
			graphic={FiltersGraphic}
		/>

		<Feature
			name="Swiftly Save"
			description="Easily save services for later and then access and manage them from any device with a Miara account."
			graphic={SaveGraphic}
		/>

		<Feature
			name="Easy Applications"
			description="Apply to services using a simple form and track your applications' statuses all in one place."
			graphic={ApplicationsGraphic}
		/>

		<Feature
			name="Intuitive Interface"
			description="Enjoy Miara's easy-to-use interface that adapts to all of your devices, from phones to desktops."
			graphic={PlatformGraphic}
		/>
	</div>
</Section>

<Section
	class="bg-blue-950"
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
			description="If you are on a mobile device, download the Miara app on Android or iOS for the best experience and integrations."
			buttonLabel="Download the App"
			buttonHref="/"
			icon={CollectIcon}
		/>

		<Step
			name="2"
			description="Use Miara to search for and filter through homeless relief services. This does not require a Miara account."
			buttonLabel="Discover Services"
			buttonHref="/discover"
			icon={CompassIcon}
		/>

		<Step
			name="3"
			description="Sign up for a Miara account. With it, you can save and apply to services while tracking your applications' statuses."
			buttonLabel="Sign Up"
			buttonHref="/signup"
			icon={PersonIcon}
		/>

		<Step
			name="4"
			description="Save services that you plan on applying to later or showing to others! You must sign in to access this feature."
			buttonLabel="Saved Services"
			buttonHref="/saved"
			icon={BookmarkIcon}
		/>

		<Step
			name="5"
			description="If you meet their eligibility requirements, apply to services through Miara and turn on status update notifications."
			buttonLabel="Applications"
			buttonHref="/applications"
			icon={DocumentIcon}
		/>

		<Step
			name="6"
			description="Run into bugs, mistakes, or something you think could be improved? Let the Miara team know by contacting us."
			buttonLabel="Contact"
			buttonHref="#contact"
			icon={MailIcon}
		/>

		<StepsConnector />
	</div>
</Section>

<Section
	class="bg-slate-900"
	id="partner"
	title="Partner"
	caption="List your services on Miara and improve your organization's application experience."
>
	<PlusIcon slot="icon" class="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11" />

	<div class="flex mt-8 gap-4 relative xs:mt-10">
		<div class="flex flex-col items-center relative">
			<div
				class="w-12 h-12 shrink-0 bg-gray-600 rounded-full flex items-center justify-center shadow-lg shadow-gray-950 z-10 sm:w-14 sm:h-14"
			>
				<MailIcon class="w-7 h-7 translate sm:w-8 sm:h-8" />
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
			/>
		</div>
	</div>

	<div class="mx-[1.45rem] h-11 flex xs:hidden">
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square border-gray-600 border-l-2 border-b-2 rounded-bl-xl"
		/>
		<div class="w-full h-0.5 my-auto bg-gradient-to-r from-gray-600 to-emerald-600" />
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square mt-auto border-emerald-600 border-t-2 border-r-2 rounded-tr-xl"
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
				class="absolute hidden w-0.5 rounded-full right-0 inset-y-0 my-auto bg-emerald-600 shadow-sm shadow-emerald-600 xs:block"
			/>
		</div>

		<div class="-mt-4 flex flex-col items-center relative">
			<div
				class="w-12 h-12 mt-4 shrink-0 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-gray-950 z-10 sm:w-14 sm:h-14"
			>
				<CheckIcon class="w-7 h-7 translate sm:w-8 sm:h-8" />
			</div>

			<div
				class="w-0.5 shrink-0 h-full bg-emerald-600 absolute xs:bg-gradient-to-b xs:from-emerald-600 xs:to-violet-600 xs:from-70%"
			></div>
		</div>
	</div>

	<div class="mx-[1.45rem] h-11 flex xs:hidden">
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square mt-auto border-violet-600 border-l-2 border-t-2 rounded-tl-xl"
		/>
		<div class="w-full h-0.5 my-auto bg-gradient-to-l from-emerald-600 to-violet-600" />
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square border-emerald-600 border-r-2 border-b-2 rounded-br-xl"
		/>
	</div>

	<div class="flex pt-4 gap-4">
		<div class="-mt-4 flex flex-col items-center relative">
			<div
				class="w-12 h-12 mt-4 shrink-0 bg-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-gray-950 z-10 sm:w-14 sm:h-14"
			>
				<ToolsIcon class="w-7 h-7 translate sm:w-8 sm:h-8" />
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
					Miara will help your organization integrate with its application backend, allowing people
					to apply, manage, and track their applications to your service.
				</p>
			</div>

			<IntegrationStepGraphic />

			<div
				class="absolute hidden w-0.5 rounded-full right-0 inset-y-0 my-auto bg-violet-600 shadow-sm shadow-violet-600 xs:block"
			/>
		</div>
	</div>

	<div class="mx-[1.45rem] h-11 flex xs:hidden">
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square border-violet-600 border-l-2 border-b-2 rounded-bl-xl"
		/>
		<div class="w-full h-0.5 my-auto bg-gradient-to-r from-violet-600 to-red-600" />
		<div
			class="h-[calc(50%+0.0625rem)] aspect-square mt-auto border-red-600 border-t-2 border-r-2 rounded-tr-xl"
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
					Later in Miara's life, we will feature newer services at the top of the discover page.
				</p>
			</div>

			<LaunchStepGraphic />

			<div
				class="absolute hidden w-0.5 rounded-full right-0 inset-y-0 my-auto bg-red-600 shadow-sm shadow-red-600 xs:block"
			/>
		</div>

		<div class="-mt-4 flex flex-col items-center relative">
			<div
				class="w-12 h-12 mt-4 shrink-0 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-gray-950 z-10 sm:w-14 sm:h-14"
			>
				<RocketIcon class="w-7 h-7 translate sm:w-8 sm:h-8" />
			</div>

			<div class="w-0.5 shrink-0 h-5 bg-red-600 absolute"></div>
		</div>
	</div>
</Section>

<Section
	class="bg-neutral-900"
	id="contact"
	title="Contact"
	caption="Talk to us about questions, concerns, or contributions. We'd love to hear from you."
>
	<MailIcon slot="icon" class="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11" />

	<ContactMethod
		label="support@miara.app"
		href="mailto:support@miara.app"
		colors={["#be123c", "#f43f5e"]}
	>
		<MailIcon class="w-6 h-6" />
	</ContactMethod>
</Section>
