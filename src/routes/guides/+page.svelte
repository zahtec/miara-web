<script lang="ts">
	import Banner from "$lib/components/Banner.svelte";
	import DocumentIcon from "~icons/fluent/document-24-filled";
</script>

<Banner
	title="Guides"
	description="View and print PDF guides for homeless services in your district."
	icon={DocumentIcon}
	class="from-teal-950 to-teal-700"
/>

<!-- Mapbox map that allows people to see their location (if access is provided) and/or
their county's districts if they are supported. Once selected, a redirect to a +server.ts pdf generator
will occur, serving the user an up-to-date service PDF. -->
