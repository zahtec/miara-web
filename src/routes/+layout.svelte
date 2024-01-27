<script lang="ts">
	import "../app.css";

	import { user } from "$lib/state/user";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";

	import type { LayoutServerData } from "./$types";

	export let data: LayoutServerData;

	user.set(data.user);
</script>

<Header />

<slot />

<Footer year={data.year} />
