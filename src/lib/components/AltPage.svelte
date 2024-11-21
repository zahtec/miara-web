<script lang="ts">
	const colorPairs = [
		["from-red-950", "to-red-700"],
		["from-yellow-950", "to-yellow-700"],
		["from-green-950", "to-green-700"],
		["from-blue-950", "to-blue-700"],
		["from-indigo-950", "to-indigo-700"],
		["from-purple-950", "to-purple-700"],
		["from-pink-950", "to-pink-700"]
	];

	let className = "";

	export { className as class };
</script>

<div
	class="flex flex-col -mt-20 w-full grow pt-20 bg-gradient-to-br {colorPairs[
		Math.floor(Math.random() * colorPairs.length)
	].join(' ')}"
>
	<main
		class="px-6 p-6 relative w-full grow mx-auto max-w-primary flex flex-col items-center justify-center sm:px-10 {className}"
	>
		<div
			class="bg-white rounded-xl flex flex-col p-6 w-full max-w-md drop-shadow-xl xs:p-8 {className}"
		>
			<slot />
		</div>

		<slot name="extra" />
	</main>
</div>
