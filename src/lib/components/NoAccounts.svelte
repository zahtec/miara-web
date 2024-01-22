<script lang="ts">
	import Anchor from "./Anchor.svelte";
	import PageContent from "$lib/components/PageContent.svelte";
	import CorruptUserIcon from "~icons/fluent/inprivate-account-20-filled";
</script>

<PageContent class="flex flex-col items-center text-center justify-center">
	<div
		class="bg-neutral-900 border-1 border-neutral-700 rounded-xl p-6 w-full max-w-md md:max-w-lg md:py-8 md:px-8"
	>
		<CorruptUserIcon class="w-14 h-14 mx-auto mb-4 md:w-18 md:h-18" />

		<h1 class="font-bold text-lg md:text-xl">Accounts Not Availible</h1>

		<p class="break-words mt-1 md:text-lg">
			Miara utilizes a seperate account management platform to ensure your data stays secure. If you
			are seeing this message, the platform's servers are either experiencing maintenance or an
			outage.
		</p>

		<Anchor href="/" class="mx-auto mt-9">Home</Anchor>
	</div>
</PageContent>
