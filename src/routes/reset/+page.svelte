<script lang="ts">
	import { emailRegex } from "$lib/utils/validation";
	import Button from "$lib/components/Button.svelte";
	import Anchor from "$lib/components/Anchor.svelte";
	import AltPage from "$lib/components/AltPage.svelte";
	import Input from "$lib/components/forms/Input.svelte";
	import RefreshIcon from "~icons/fluent/arrow-clockwise-16-filled";

	import type { UnauthedPasswordResetRequest } from "$lib/types/api";
	import { slide } from "svelte/transition";

	let email = "";
	let emailError = false;
	let submitting = false;
	let successView = false;
	let rateLimitError = false;

	const handle = ({ currentTarget }: Event) => {
		const { value } = currentTarget as HTMLInputElement;

		emailError = !emailRegex.test(value);
		email = value;
	};

	const submit = () => {
		submitting = true;
		rateLimitError = false;

		fetch("/api/reset", {
			method: "POST",
			body: JSON.stringify({
				email
			} satisfies UnauthedPasswordResetRequest.Request)
		}).then((res) => {
			submitting = false;

			if (res.status === 400) return (rateLimitError = true);
			else if (res.status === 500)
				return alert(
					"An internal error has occured. If you see this message, please notify Miara by emailing support@miara.app."
				);

			successView = true;
		});
	};
</script>

<svelte:head>
	<title>Reset Password — Miara</title>
</svelte:head>

<AltPage class="gap-2">
	<div class="flex justify-between items-center mb-4">
		<h1 class="font-bold text-xl">Reset Your Password</h1>
		<RefreshIcon class="w-8 h-8" />
	</div>

	{#if !successView}
		<p class="mb-6">
			Enter the email associated with your account below and a link to reset your password will be
			sent.
		</p>

		<Input
			on:input={handle}
			disabled={submitting}
			error={emailError}
			errorMessage="Must be a valid email."
			type="email"
			placeholder="Email"
		/>

		<Button
			on:click={submit}
			disabled={emailError || submitting || !email}
			class="mt-8 ml-auto py-1 w-full {submitting ? 'animate-pulse disabled:opacity-100' : ''}"
		>
			Continue
		</Button>

		{#if rateLimitError}
			<p transition:slide={{ duration: 100 }} class="text-red-500 font-semibold text-sm">
				You can only request one password reset every 30 minutes.
			</p>
		{/if}

		<div class="flex items-center gap-3 text-neutral-600 my-4 select-none">
			<div class="border-[0.5px] h-min w-1/2 border-current" />
			<p class="text-sm font-bold">OR</p>
			<div class="border-[0.5px] h-min w-1/2 border-current" />
		</div>
	{:else}
		<p class="mb-6">
			If an account with this email exists, an email with a link to reset your password was sent.
		</p>
	{/if}

	<Anchor class="w-full" href="/login">Back to Log In</Anchor>
</AltPage>
