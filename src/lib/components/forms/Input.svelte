<script lang="ts">
	import { slide } from "svelte/transition";
	import { createEventDispatcher } from "svelte";
	import WarnIcon from "~icons/fluent/error-circle-12-filled";

	import type { HTMLInputTypeAttribute } from "svelte/elements";

	export let disableInput = false;
	export let disableSubmit = false;
	export let errorMessage = "";
	export let placeholder: string;
	export let error: boolean = false;
	export let value = "";

	export let type: HTMLInputTypeAttribute = "text";

	const dispatch = createEventDispatcher();

	let focus: boolean;

	const handleKeyUp = (event: KeyboardEvent) => {
		if (disableSubmit) return;

		if (event.key === "Enter") {
			event.preventDefault();
			dispatch("submit");
		}
	};
</script>

<div class:opacity-50={disableInput} class="transition-opacity duration-200">
	<div
		class:border-neutral-700={!error}
		class:border-red-500={error}
		class:border-opacity-0={!focus}
		class:border-opacity-100={focus || error}
		class="rounded-xl bg-neutral-900 flex items-center py-4 px-3 border-1 transition-[border] duration-200 h-14 w-full"
	>
		<input
			on:input
			on:keyup={handleKeyUp}
			on:focus={() => (focus = true)}
			on:blur={() => (focus = false)}
			{type}
			{value}
			disabled={disableInput}
			{placeholder}
			class="bg-transparent w-full mt-[0.1rem] active:outline-none focus-visible:outline-none placeholder:text-neutral-500 placeholder:select-none"
		/>

		<div
			class="overflow-hidden transition-[width,margin] duration-150 shrink-0 {error
				? 'w-5 ml-3'
				: 'w-0'}"
		>
			<WarnIcon class="w-5 h-5 text-red-500 pointer-events-none bg-black shadow-black" />
		</div>
	</div>

	{#if error}
		<p
			transition:slide={{ duration: 100 }}
			class="text-red-500 font-semibold text-xs mt-2 text-left"
		>
			{errorMessage}
		</p>
	{/if}
</div>
