<script lang="ts">
	let className = "";

	export { className as class };
</script>

<main class="px-6 py-6 relative mx-auto w-full max-w-primary grow sm:px-10 {className}">
	<slot />
</main>
