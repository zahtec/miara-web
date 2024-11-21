<script lang="ts">
	import RefreshIcon from "~icons/fluent/arrow-clockwise-16-filled";

	let className: string;

	export { className as class };
</script>

<div
	class="text-white flex gap-3 items-center justify-center p-4 border-1 rounded-xl mb-3 sm:w-fit sm:px-8 {className}"
>
	<RefreshIcon class="w-6 h-6" />
	<h1 class="font-semibold">Last Updated 1/5/24</h1>
</div>
