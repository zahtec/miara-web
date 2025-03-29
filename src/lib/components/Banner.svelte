<script lang="ts">
	import type { Component } from "svelte";

	let className: string;
	export let title: string;
	export let description: string;
	export let icon: Component;

	export { className as class };
</script>

<div
	class="text-white bg-gradient-to-br pb-10 pt-20 overflow-hidden -mt-20 text-center xs:pb-14 xs:pt-32 sm:text-left md:pt-36 md:pb-14 {className}"
>
	<div
		class="relative px-6 max-w-primary mx-auto sm:flex sm:items-center sm:justify-between sm:px-10"
	>
		<div class="md:shrink-0">
			<div class="xs:flex xs:gap-2 xs:items-center xs:justify-center sm:block">
				<svelte:component
					this={icon}
					class="mx-auto w-12 h-12 text-white/30 stroke-1 stroke-white xs:w-12 xs:h-12 xs:mx-0 sm:hidden"
				/>

				<h1 class="text-5xl mt-3 font-bold xs:mt-0 xs:text-6xl">{title}</h1>
			</div>

			<p class="mt-3 max-w-xs mx-auto xs:text-lg sm:ml-0 xs:max-w-sm">{description}</p>
		</div>

		<svelte:component
			this={icon}
			class="hidden text-white/30 stroke-1 stroke-white -mr-3 sm:block sm:w-32 sm:h-32 md:absolute md:left-[32.85rem] md:mr-0"
		/>

		<div class="hidden md:flex absolute left-[40.1rem]">
			{#each { length: 4 } as _, i}
				<svelte:component
					this={icon}
					class="text-white/30 stroke-1 stroke-white -mr-3 w-32 h-32"
					style="opacity: {1 - i * 0.27};"
				/>
			{/each}
		</div>
	</div>
</div>
