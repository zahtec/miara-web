<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import MailIcon from "~icons/fluent/mail-16-filled";
	import StarIcon from "~icons/fluent/star-24-filled";
	import Step from "$lib/components/home/Step.svelte";
	import LinkedInIcon from "~icons/bxl/linkedin-square";
	import PersonIcon from "~icons/fluent/person-16-filled";
	import Section from "$lib/components/home/Section.svelte";
	import LightningIcon from "~icons/fluent/flash-16-filled";
	import PlusIcon from "~icons/fluent/add-circle-16-filled";
	import Feature from "$lib/components/home/Feature.svelte";
	import BookmarkIcon from "~icons/fluent/bookmark-20-filled";
	import AlertIcon from "~icons/fluent/error-circle-16-filled";
	import CollectIcon from "~icons/fluent/collections-16-filled";
	import HeroBackground from "$lib/images/hero-background.webp";
	import DocumentIcon from "~icons/fluent/document-text-16-filled";
	import MobileLandingImage from "$lib/images/landing-mobile.webp";
	import SaveGraphic from "$lib/components/svgs/SaveGraphic.svelte";
	import DesktopLandingImage from "$lib/images/landing-desktop.webp";
	import CompassIcon from "~icons/fluent/compass-northwest-20-filled";
	import ContactMethod from "$lib/components/home/ContactMethod.svelte";
	import StepsConnector from "$lib/components/svgs/StepsConnector.svelte";
	import FiltersGraphic from "$lib/components/svgs/FiltersGraphic.svelte";
	import PlatformGraphic from "$lib/components/svgs/PlatformGraphic.svelte";
	import ApplicationsGraphic from "$lib/components/svgs/ApplicationsGraphic.svelte";
</script>

<section
	class="w-full overflow-hidden bg-no-repeat bg-cover bg-center -mt-20 pt-28 px-6 -hue-rotate-30 mx-auto max-w-[2000px] text-center sm:pt-32 sm:px-10 md:-mt-24 md:py-52 xl:bg-[length:170rem]"
	style="background-image: url({HeroBackground});"
>
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
			description="If you are on a mobile device, download the Miara app for the best experience and integrations."
			buttonLabel="Download the App"
			buttonHref="/"
		>
			<CollectIcon class="w-12 h-12 xs:w-20 xs:h-20" />
		</Step>

		<Step
			name="2"
			description="Use Miara to search for and filter through homeless relief services. This does not require a Miara account."
			buttonLabel="Discover Services"
			buttonHref="/discover"
		>
			<CompassIcon class="w-12 h-12 xs:w-20 xs:h-20" />
		</Step>

		<Step
			name="3"
			description="Sign up for a Miara account. With it, you can save and apply to services while tracking your applications' statuses."
			buttonLabel="Sign Up"
			buttonHref="/signup"
		>
			<PersonIcon class="w-12 h-12 xs:w-20 xs:h-20" />
		</Step>

		<Step
			name="4"
			description="Save services that you plan on applying to later or showing to others! You must sign in to access this feature."
			buttonLabel="Saved Services"
			buttonHref="/saved"
		>
			<BookmarkIcon class="w-12 h-12 xs:w-20 xs:h-20" />
		</Step>

		<Step
			name="5"
			description="If you meet their eligibility requirements, apply to services through Miara and turn on status update notifications."
			buttonLabel="Applications"
			buttonHref="/applications"
		>
			<DocumentIcon class="w-12 h-12 xs:w-20 xs:h-20" />
		</Step>

		<Step
			name="6"
			description="Run into bugs, mistakes, or something you think could be improved? Let the Miara team know by contacting us."
			buttonLabel="Contact"
			buttonHref="#contact"
		>
			<MailIcon class="w-12 h-12 xs:w-20 xs:h-20" />
		</Step>

		<StepsConnector />
	</div>
</Section>

<Section
	class="bg-gray-900"
	id="partner"
	title="Partner"
	caption="Become a partner and we'll help you deploy and use Miara's technology in your area."
>
	<PlusIcon slot="icon" class="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11" />

	<div class="border-1 border-white rounded-xl p-4 mt-8 xs:mt-10">
		<div class="flex items-center gap-2">
			<AlertIcon class="w-8 h-8" />

			<h1 class="font-bold text-lg">Partnerships are on pause</h1>
		</div>

		<p class="mt-4">
			Miara is currently in the early development stage and is not deploying its technology. We want
			to ensure that our tools do not unintentionally subvert ongoing efforts to prevent
			homelessness by being inacurrate, and thus are continuing to work hard toward an effective
			solution.
		</p>

		<p class="mt-4">
			We appreciate your understanding and hope to work with partners in the future.
			<strong>
				If you think your organization can help in any way, please <a
					href="#contact"
					class="underline underline-offset-2">contact us</a
				>
				below.
			</strong>
		</p>
	</div>
</Section>

<Section
	class="bg-neutral-900"
	id="contact"
	title="Contact"
	caption="Talk to us about questions, concerns, or contributions. We'd love to hear from you."
>
	<MailIcon slot="icon" class="w-8 h-8 xs:w-10 xs:h-10 sm:w-11 sm:h-11" />

	<div class="flex flex-col gap-4 mt-8 xs:mt-10 xs:grid xs:grid-cols-2">
		<ContactMethod
			label="support@miara.app"
			href="mailto:support@miara.app"
			colors={["#7e22ce", "#4e46e5"]}
		>
			<MailIcon class="w-6 h-6" />
		</ContactMethod>

		<!-- <ContactMethod
			label="Toryn Thompson"
			href="https://www.linkedin.com/in/torynt"
			colors={["#1d4fd8", "#036aa1"]}
		>
			<LinkedInIcon class="w-6 h-6" />
		</ContactMethod> -->
	</div>
</Section>
