<script lang="ts">
	import SearchIcon from "~icons/fluent/search-12-filled";

	import type { FormEventHandler } from "svelte/elements";

	export let value: string | undefined;

	let focus: boolean;
	let debounce: NodeJS.Timeout;

	const onInput: FormEventHandler<HTMLInputElement> = ({ currentTarget }) => {
		clearTimeout(debounce);

		value = undefined;

		debounce = setTimeout(() => (value = currentTarget.value), 500);
	};
</script>

<div
	class:border-opacity-100={focus}
	class:border-opacity-0={!focus}
	class="rounded-xl bg-gray-200 flex gap-3 items-center py-4 px-3 border-1 border-neutral-700 transition-[border] duration-200 h-14 w-full"
>
	<SearchIcon class="w-6 h-6" />

	<input
		on:input={onInput}
		on:focus={() => (focus = true)}
		on:blur={() => (focus = false)}
		type="text"
		placeholder="Search..."
		class="bg-transparent w-full mt-[0.1rem] active:outline-none focus-visible:outline-none placeholder:text-neutral-500"
	/>
</div>
