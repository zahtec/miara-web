<script lang="ts">
	import { fade } from "svelte/transition";
</script>

<div
	out:fade={{ duration: 150 }}
	class="bg-neutral-900 rounded-xl border-1 border-neutral-700 h-[26rem] xs:h-[31rem] md:h-[30rem] animate-pulse"
></div>
