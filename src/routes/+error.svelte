<script lang="ts">
	import { page } from "$app/stores";
	import Anchor from "$lib/components/Anchor.svelte";
	import AltPage from "$lib/components/AltPage.svelte";
</script>

<svelte:head>
	<title>{$page.status} — Miara</title>
</svelte:head>

<AltPage>
	<h1 class="font-bold text-8xl md:text-9xl">{$page.status}</h1>

	<p class="mt-8 mb-12 text-lg md:text-xl">
		{$page.status === 404
			? "The requested page could not be found."
			: $page.status === 500
				? "An internal server error occured. If this issue persists, please contact us."
				: "Something went wrong."}
	</p>

	<Anchor href="/" class="mx-auto">Home</Anchor>
</AltPage>
