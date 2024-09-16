<script lang="ts">
	import Toggle from "$lib/components/forms/Toggle.svelte";

	export let label: string;
	export let value: boolean;
	export let disabled = false;
</script>

<div class="flex justify-between">
	<h1 class="font-semibold mb-1 ml-1">{label}</h1>

	<Toggle bind:checked={value} bind:disabled />
</div>
