<script lang="ts">
	import ShallowArrowIcon from "~icons/fluent/ios-arrow-rtl-24-filled";

	export let href: string;
	export let label: string;
	export let colors: string[];
</script>

<a
	{href}
	target="_blank"
	class="bg-neutral-800 rounded-xl p-4 font-bold flex items-center justify-between w-full border-1 border-transparent bg-origin-border select-none [background-clip:padding-box,border-box]"
	style="background-image: linear-gradient(#262626,#262626), linear-gradient(to bottom right,{colors.join(
		','
	)})"
>
	<div class="flex gap-2">
		<slot />

		<p>{label}</p>
	</div>

	<ShallowArrowIcon class="ml-4 w-4 h-4" />
</a>
