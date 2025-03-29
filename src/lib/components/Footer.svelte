<script lang="ts">
	import { scrollToTop } from "$lib/utils/scroll";

	export let year: number;
</script>

<footer class="h-20 border-t-1 border-neutral-700 mt-auto px-6 sm:px-10">
	<div class="flex items-center justify-between text-neutral-600 max-w-primary h-full mx-auto">
		<p>&copy {year} Miara</p>

		<div>
			<a href="/privacy" class="underline" on:click={scrollToTop}>Privacy</a>
			<a href="/terms" class="underline ml-3" on:click={scrollToTop}>Terms</a>
		</div>
	</div>
</footer>
