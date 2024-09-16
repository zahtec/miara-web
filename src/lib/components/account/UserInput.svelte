<script lang="ts">
	import Input from "$lib/components/forms/Input.svelte";

	import type { HTMLInputTypeAttribute } from "svelte/elements";

	export let label: string;
	export let disableInput = false;
	export let disableSubmit = false;
	export let errorMessage = "";
	export let error: boolean = false;
	export let value: string;
	export let type: HTMLInputTypeAttribute = "text";
</script>

<div>
	<h1 class="font-semibold mb-1 ml-1">{label}</h1>

	<Input
		placeholder={label}
		bind:disableInput
		bind:disableSubmit
		bind:error
		bind:errorMessage
		bind:value
		on:input
		on:submit
		{type}
	/>
</div>
