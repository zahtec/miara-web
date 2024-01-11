<script lang="ts">
	import { page } from "$app/stores";
	import Button from "$lib/components/Button.svelte";
	import PageContent from "$lib/components/PageContent.svelte";
</script>

<PageContent class="flex flex-col items-center text-center justify-center">
	<div
		class="bg-neutral-900 border-1 border-neutral-700 rounded-xl flex flex-col p-6 w-full max-w-md md:max-w-lg md:py-8 md:px-8"
	>
		<h1 class="font-bold text-8xl md:text-9xl">{$page.status}</h1>

		<p class="mt-8 mb-12 text-lg md:text-xl">
			{$page.status === 404
				? "The requested page could not be found."
				: $page.status === 500
				  ? "An internal server error occured. If this issue persists, please contact us."
				  : "Something went wrong."}
		</p>

		<Button href="/" label="Home" class="mx-auto" />
	</div>
</PageContent>
