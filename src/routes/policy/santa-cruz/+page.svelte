<script lang="ts">
	import Banner from "$lib/components/Banner.svelte";
	import ScriptIcon from "~icons/fluent/script-16-filled";

	import PageContent from "$lib/components/PageContent.svelte";
	import Separator from "$lib/components/policy/Separator.svelte";
	import Option from "$lib/components/policy/Option.svelte";
</script>

<Banner
	title="Policy Advocacy"
	description="Learn how to advocate for policy and projects that help the unhoused in Santa Cruz."
	icon={ScriptIcon}
	class="from-red-950 to-red-700"
/>

<PageContent
	class="flex flex-col gap-4 max-w-screen-md xs:text-lg md:py-8 lg:flex lg:gap-8 lg:justify-center lg:max-w-primary"
>
	<p>
		Policy is what determines how things are run and what projects are taken up in our county. It
		can be a confusing word, but, truly, it just means people writing formal documents that outline
		how something should be done—regardless of whether that "something" is a brand new project or an
		old law. When Santa Cruz decides to build a new homeless shelter, that's part of policy
		coordination. When they decide to change the rules for how long someone can stay at that
		shelter, that's policy too.
	</p>

	<p>
		As you can probably guess by the name, <b>poli</b>cy is part of <b>poli</b>tics, and by being
		politically active in our community, you can aid in passing policy that will help those in need
		that you want to support. This means pushing for lowering housing costs, creating new programs
		for the unhoused, and so much more. Apart from volunteering, policy advocacy is by far the best
		way you can cause big changes to happen in our county—especially for homelessness!
	</p>

	<p>
		Below, we've listed various ways you can help Miara's mission of advocating for policy that
		helps the unhoused in Santa Cruz. We will be updating this list as we learn more about what's
		happening and what's needed in our community, so check back often! If you have any questions,
		please contact us via email at
		<a href="mailto:support@miara.app" class="underline">support@miara.app</a>.
	</p>

	<Separator />

	<Option
		title="Become a Housing for Health Member"
		color="bg-yellow-400"
		href="https://www.housingforhealthpartnership.org/About/HousingforHealthPartnershipMembership.aspx"
		image="/h4h.jpeg"
	>
		<p>
			Housing for Health is the county's lead organization coordinating homelessness prevention and
			alleviation. The Housing for Health Partnership Membership program is free and open to any
			person or organization in Santa Cruz County that is committed to making an impact.
		</p>

		<p class="mt-4">
			A Housing for Health Partnership Membership provides regular email updates about the work of
			the Partnership; invitations to participate, learn, and provide feedback at community
			meetings; chances to express opinions through surveys and voting opportunities; opportunities
			to become a member of a workgroup or committee working on specific issue areas; events to
			network with thers working on a shared goal; and updates on employment and volunteer
			opportunities related to health and housing.
		</p>
	</Option>

	<Separator />

	<Option
		title="Speak at a Community and Infrastructure Development Meeting"
		color="bg-emerald-400"
		href="https://cdi.santacruzcountyca.gov/CDICalendar.aspx"
		image="/infra.png"
	>
		<p>
			The county development meetings are where the public can speak on issues related to housing
			and infrastructure development in general. Currently, there is an ongoing project called the
			"Housing Element Rezone Program" that is looking to repurpose 75 parcels (properties) in the
			county for affordable housing. To do this, they need to change the zoning of these properties.
			The timeline for this project (imaged below) spans several years, but it could be done much
			faster, reducing costs. By urging the county to speed up this process, you can help get more
			affordable housing built faster and cheaper.
		</p>

		<img
			src="/infra-timeline.png"
			alt="Housing Element Rezone Program Timeline"
			class="my-10 sm:max-w-screen-xs"
		/>

		<p>
			Additionally, if you see any abandoned or underused properties in your area, you can suggest
			them to the development department for repurposing as affordable housing. This is a great way
			to get more housing built without having to wait for new construction.
		</p>

		<p class="mt-4">
			Moreover, it is incredibly important to ask the county where the money of certain grants and
			funding is going. Not many people attend these meetings and ask those questions, so directly
			asking where that funding is going can help ensure that the money is being used effectively.
			It lets them know people are paying attention and can help prevent misuse of funds.
			Specifically, ask about the the $1M in funds recently received from the U.S. Department of
			Housing and Urban Development (HUD) for community development. Urge them to use this funding
			for affordable housing.
		</p>

		<p class="mt-4">
			Please note that the members of the commission are not obligated to listen to what you say.
			Thus, a more time-effective method of getting your voice heard is to contact the commission at <a
				href="mailto:tracy.cunningham@santacruzcountyca.gov"
				class="underline"
				target="_blank"
			>
				tracy.cunningham@santacruzcountyca.gov
			</a>
			or
			<a href="mailto:HousingProgramsInfo@santacruzcountyca.gov" target="_blank" class="underline">
				housingprogramsinfo@santacruzcountyca.gov.
			</a>.
		</p>
	</Option>

	<Separator />

	<Option
		title="Speak at a Housing Advisory Commission Meeting"
		color="bg-blue-400"
		href="https://cdi.santacruzcountyca.gov/Portals/35/CDI/UnifiedPermitCenter/Get%20Involved/Commissions/HAC%20Work%20Program%202024-2025%20.pdf"
		image="/infra.png"
	>
		<p>
			Another great way of advocating for more housing or even proposing your own unique ideas to
			help lower housing costs is to speak at a Housing Advisory Commission meeting. These
			individuals are responsible for advising the county on housing-related matters, and attending
			a meeting wherein you express your concerns or ideas can help them make better decisions,
			speed up the process of building new housing, or lower the costs of current housing in the
			county.
		</p>

		<p class="mt-4">
			Most of the information provided in the previous section about the Community and
			Infrastructure Development meetings applies here as well. The main difference is that the
			Housing Advisory Commission is more focused on housing-related matters, while the Community
			and Infrastructure Development meetings are more general.
		</p>

		<p class="mt-4">
			Please read the previous section for more information about what you should say at these
			meetings. For this specifically, ask about how they are achieving the goals present on their
			agenda linked below. Apply the pressure!
		</p>
	</Option>

	<Separator />

	<Option
		title="Take a Community Survey on Fund Allocation"
		color="bg-slate-400"
		href="https://www.surveymonkey.com/r/MG55556"
		image="/cosc.png"
	>
		<p>
			The City of Santa Cruz is currently conducting a survey to determine how to allocate funds
			from the U.S. Department of Housing and Urban Development (HUD) for community development.
			This survey is a great way to voice your opinion on how the city should spend its money and
			contains a specific field where you can list affordable housing as your #1 reccomendation. The
			survey is open to all residents of Santa Cruz County, so please take a few minutes to fill it
			out and make your voice heard!
		</p>
	</Option>

	<Separator />

	<Option
		title="Push for The Affordable Housing Portal Project"
		color="bg-sky-400"
		href="info@housingforhealthpartnership.org"
		image="/h4h.jpeg"
		buttonLabel="Email Them"
	>
		<p>
			Housing for Health discussed a project in 2023 that would allow individuals to easily find and
			apply for affordable housing online. Miara has similar goals surrounding access to service
			finding and online applications, but does not have the power to fully implement such a
			service. By advocading for the development of this project, you can help make it easier for
			those in need to find housing quickly and, hopefully, effectively.
		</p>
	</Option>

	<Separator />

	<p>
		Thank you for your genuine interest in helping our county alleviate, prevent, and eventually end
		homelessness. It is possible, but it will take the effort of many to make it happen. Again, if
		you have any questions, please contact us via email at <a
			href="mailto:support@miara.app"
			class="underline"
			target="_blank"
		>
			support@miara.app
		</a>.
	</p>
</PageContent>
