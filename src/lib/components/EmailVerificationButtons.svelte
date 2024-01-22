<script lang="ts">
	import { slide } from "svelte/transition";
	import Anchor from "$lib/components/Anchor.svelte";
	import Button from "$lib/components/Button.svelte";
	import RefreshIcon from "~icons/fluent/arrow-clockwise-16-filled";

	import type { Verify } from "$lib/types/api";

	export let email: string;

	let resending = false;
	let rateLimitError = false;
	let succesfullyResent = false;

	const resend = () => {
		resending = true;
		succesfullyResent = false;

		fetch("/api/verify", {
			method: "POST",
			body: JSON.stringify({
				email
			} satisfies Verify.Request)
		}).then((res) => {
			resending = false;

			if (res.status === 400) return (rateLimitError = true);
			else if (res.status === 500)
				return alert(
					"An internal error has occured. If you see this message, please notify Miara by emailing support@miara.app."
				);

			succesfullyResent = true;
		});
	};
</script>

<div class="flex flex-col gap-3 mt-8 xs:flex-row">
	<Anchor href="https://mail.google.com" target="_blank" class="w-full">Open Gmail</Anchor>
	<Button
		on:click={resend}
		icon={RefreshIcon}
		disabled={resending}
		class="w-full {resending ? 'animate-pulse disabled:opacity-100' : ''}"
	>
		Resend
	</Button>
</div>

{#if succesfullyResent}
	<p
		transition:slide={{ duration: 100 }}
		class="text-green-500 font-semibold text-sm mt-4 text-center"
	>
		Email succesfully resent.
	</p>
{/if}

{#if rateLimitError && !resending}
	<p
		transition:slide={{ duration: 100 }}
		class="text-red-500 font-semibold text-sm mt-4 text-center"
	>
		You can only resend the email every 30 minutes.
	</p>
{/if}
