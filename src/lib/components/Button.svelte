<script lang="ts">
	import { scrollToTop } from "$lib/utils/scroll";
	import ShallowArrowIcon from "~icons/fluent/ios-arrow-rtl-24-filled";

	let className = "";
	export let href: string;
	export let label: string;
	export let target: "_blank" | "_self" | "_parent" | "_top" = "_self";

	export { className as class };
</script>

<a
	{href}
	{target}
	class="bg-neutral-800 border-1 border-neutral-700 rounded-xl px-6 py-3 font-semibold flex gap-4 items-center justify-between w-fit select-none {className}"
	on:click={scrollToTop}
>
	<p>{label}</p>

	<slot name="icon">
		<ShallowArrowIcon class="w-4 h-4 shrink-0" />
	</slot>
</a>
