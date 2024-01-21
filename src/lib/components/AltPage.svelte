<script lang="ts">
	import PageContent from "$lib/components/PageContent.svelte";

	let className = "";

	export { className as class };
</script>

<PageContent class="flex flex-col items-center text-center justify-center">
	<div
		class="bg-neutral-900 border-1 border-neutral-700 rounded-xl flex flex-col p-6 w-full max-w-md md:max-w-lg md:py-8 md:px-8 {className}"
	>
		<slot />
	</div>
</PageContent>
