<script lang="ts">
	import Anchor from "$lib/components/Anchor.svelte";
	import AltPage from "$lib/components/AltPage.svelte";
	import LinkXIcon from "~icons/fluent/link-dismiss-24-filled";
	import MailCheckIcon from "~icons/fluent/mail-checkmark-24-filled";

	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>Verify Email — Miara</title>
</svelte:head>

<AltPage>
	<div class="flex justify-between items-center mb-8">
		<h1 class="font-bold text-xl">
			{data.expired ? "Link Expired" : "Verified Email"}
		</h1>
		<svelte:component this={data.expired ? LinkXIcon : MailCheckIcon} class="w-8 h-8" />
	</div>

	<p class="mb-8">
		{data.expired
			? "This verification link has expired and can not be used for verification. Please log in to receive another verification link."
			: `Your email address "${data.email}" has been succesfully verified. You may now log into your Miara account.`}
	</p>

	<Anchor href="/login" class="w-full">Log In</Anchor>
</AltPage>
