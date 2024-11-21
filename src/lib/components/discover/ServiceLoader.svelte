<script lang="ts">
	import { fade } from "svelte/transition";
</script>

<div
	out:fade={{ duration: 150 }}
	class="bg-gray-200 rounded-xl h-[26rem] xs:h-[31rem] md:h-[30rem] animate-pulse"
></div>
