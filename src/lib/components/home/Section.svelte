<script lang="ts">
	let className = "";
	export let id: string;
	export let title: string;
	export let caption: string;

	export { className as class };
</script>

<div {id} class="-mt-20 mb-20"></div>

<section class="px-6 py-12 sm:px-10 sm:py-16 {className}">
	<div class="max-w-md xs:max-w-primary md:px-10 mx-auto">
		<slot name="icon" />

		<h1 class="font-bold text-4xl leading-none mt-5 xs:text-5xl sm:text-6xl">{title}</h1>

		<p class="mt-2 max-w-sm xs:text-lg">{caption}</p>

		<slot />
	</div>
</section>
