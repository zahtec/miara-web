<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import LinkXIcon from "~icons/fluent/link-dismiss-24-filled";
	import PageContent from "$lib/components/PageContent.svelte";
	import MailCheckIcon from "~icons/fluent/mail-checkmark-24-filled";

	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>Verify Email — Miara</title>
</svelte:head>

<PageContent class="flex flex-col items-center text-center justify-center">
	<div
		class="bg-neutral-900 border-1 border-neutral-700 rounded-xl p-6 w-full max-w-md md:max-w-lg md:py-8 md:px-8"
	>
		<svelte:component
			this={data.expired ? LinkXIcon : MailCheckIcon}
			class="w-14 h-14 mx-auto mb-4 md:w-18 md:h-18"
		/>

		<h1 class="font-bold text-lg md:text-xl">
			{data.expired ? "Link Expired" : "Succesfully Verified Email"}
		</h1>

		<p class="break-words mt-1 md:text-lg">
			{data.expired
				? "This verification link has expired and can not be used for verification. Please log in to receive another verification link."
				: `Your email address "${data.email}" has been succesfully verified. You may now log into your Miara account.`}
		</p>

		<Button href="/login" label="Log In" class="mx-auto mt-9" />
	</div>
</PageContent>
