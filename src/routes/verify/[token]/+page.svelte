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

	<Anchor href="/login" class="mx-auto mt-9">Log In</Anchor>
</AltPage>
