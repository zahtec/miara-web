<script lang="ts">
	export let active: boolean;
</script>

<div
	class:h-0={!active}
	class:h-14={active}
	class:bg-opacity-0={!active}
	class:border-opacity-0={!active}
	class="rounded-xl bg-gray-200 duration-200 w-full overflow-hidden -my-2 md:hidden"
>
	<h1 class="p-4 font-semibold">Coming soon.</h1>
</div>
