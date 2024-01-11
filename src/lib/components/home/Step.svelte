<script lang="ts">
	import ShallowArrowIcon from "~icons/fluent/ios-arrow-rtl-24-filled";

	export let name: string;
	export let buttonHref: string;
	export let buttonLabel: string;
	export let description: string;
</script>

<div
	class="relative border-1 border-blue-700 bg-blue-900 rounded-xl p-4 overflow-hidden group shadow-[0_0_1.5rem_-1rem] shadow-blue-700 z-10 even:max-sm:text-right"
>
	<h1 class="text-xl font-bold xs:text-2xl">{name}</h1>

	<p
		class="mt-2 mb-4 max-w-sm group-even:ml-auto sm:max-w-sm sm:ml-0 sm:group-even:ml-0 sm:group-last-of-type:max-w-sm"
	>
		{description}
	</p>

	<div
		class="absolute -z-10 text-blue-700 -right-3 -bottom-3 group-even:-left-3 xs:inset-y-0 xs:my-auto xs:h-fit xs:-right-8 xs:group-even:-left-8 sm:group-even:left-auto sm:-bottom-28 sm:-right-8"
	>
		<slot />
	</div>

	<a
		href={buttonHref}
		class="flex items-center font-semibold gap-1 group-even:justify-end sm:group-even:justify-start"
	>
		<p>{buttonLabel}</p>
		<ShallowArrowIcon class="w-4 h-4 shrink-0" />
	</a>
</div>
