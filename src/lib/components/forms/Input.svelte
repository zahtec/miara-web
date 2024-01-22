<script lang="ts">
	import { slide } from "svelte/transition";
	import WarnIcon from "~icons/fluent/error-circle-12-filled";

	import type { HTMLInputTypeAttribute } from "svelte/elements";

	export let disabled = false;
	export let errorMessage = "";
	export let placeholder: string;
	export let error: boolean = false;

	export let type: HTMLInputTypeAttribute = "text";

	let focus: boolean;
</script>

<div class:opacity-50={disabled} class="transition-opacity duration-200">
	<div
		class:border-neutral-700={!error}
		class:border-red-500={error}
		class:border-opacity-0={!focus}
		class:border-opacity-100={focus || error}
		class="rounded-xl bg-neutral-950 flex items-center py-4 px-3 border-1 transition-[border] duration-200 h-14 w-full"
	>
		<input
			on:input
			on:focus={() => (focus = true)}
			on:blur={() => (focus = false)}
			{type}
			{disabled}
			{placeholder}
			class="bg-transparent w-full mt-[0.1rem] active:outline-none focus-visible:outline-none placeholder:text-neutral-500"
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
