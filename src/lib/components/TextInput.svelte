<script lang="ts">
	export let value: string;
	export let placeholder: string;

	let focus: boolean;
</script>

<div
	class:border-opacity-100={focus}
	class:border-opacity-0={!focus}
	class="rounded-xl bg-neutral-950 flex gap-3 items-center py-4 px-3 border-1 border-neutral-700 transition-[border] duration-200 h-14 w-full"
>
	<input
		bind:value
		on:focus={() => (focus = true)}
		on:blur={() => (focus = false)}
		type="text"
		{placeholder}
		class="bg-transparent w-full mt-[0.1rem] active:outline-none focus-visible:outline-none placeholder:text-neutral-500"
	/>
</div>
