<script lang="ts">
	import Anchor from "$lib/components/Anchor.svelte";

	export let title: string;
	export let href: string;
	export let color: string;
	export let image: string;
	export let buttonLabel = "Learn More";
</script>

<div>
	<div class="h-20 flex gap-2 xs:h-24 xs:gap-4">
		<div class="w-1 rounded-full h-full {color}"></div>
		<img src={image} />
	</div>

	<h1 class="font-bold text-2xl mt-6 mb-2 xs:text-3xl">{title}</h1>

	<slot />

	<Anchor {href} target="_blank" class="mt-6">{buttonLabel}</Anchor>
</div>
