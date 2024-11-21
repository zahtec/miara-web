<script lang="ts">
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	import GoogleIcon from "~icons/bxl/google";
	import Button from "$lib/components/Button.svelte";
	import MailIcon from "~icons/fluent/mail-16-filled";
	import AltPage from "$lib/components/AltPage.svelte";
	import Input from "$lib/components/forms/Input.svelte";
	import { nameRegex, emailRegex } from "$lib/utils/validation";
	import NewPersonIcon from "~icons/fluent/person-add-28-filled";
	import EmailVerificationButtons from "$lib/components/EmailVerificationButtons.svelte";

	import type { Signup } from "$lib/types/api";

	let submitting = false;
	let verifyEmailView = false;
	let emailInUseError = false;
	let googleOauthError: string | null = null;

	const input = {
		name: "",
		email: ""
	};

	const errors = {
		name: false,
		email: false
	};

	const handle = ({ currentTarget }: Event) => {
		const { placeholder, value } = currentTarget as HTMLInputElement;

		emailInUseError = false;

		if (placeholder.toLowerCase() === "full name") {
			input.name = value;
			errors.name = !nameRegex.test(value) || value.length < 5 || value.length > 30;
		} else {
			input.email = value;
			errors.email = !emailRegex.test(value);
		}
	};

	const submit = () => {
		submitting = true;

		fetch("/api/signup", {
			method: "POST",
			body: JSON.stringify({
				email: input.email,
				name: input.name
			} satisfies Signup.Request)
		}).then((res) => {
			submitting = false;

			if (res.status === 400) return (emailInUseError = true);
			else if (res.status === 500)
				return alert(
					"An internal error has occured. If you see this message, please notify Miara by emailing support@miara.app."
				);

			verifyEmailView = true;
		});
	};

	onMount(
		() => (googleOauthError = new URLSearchParams(window.location.search).get("google_error"))
	);
</script>

<svelte:head>
	<title>Sign Up — Miara</title>
</svelte:head>

<AltPage class="gap-2">
	<div class="flex justify-between items-center mb-8">
		<h1 class="font-bold text-xl">{verifyEmailView ? "Verify Your Email" : "Sign Up"}</h1>
		<svelte:component this={verifyEmailView ? MailIcon : NewPersonIcon} class="w-8 h-8" />
	</div>

	{#if !verifyEmailView}
		{@const disableSubmit =
			errors.name || errors.email || !input.name.length || !input.email.length || submitting}

		<Input
			on:input={handle}
			on:submit={submit}
			{disableSubmit}
			disableInput={submitting}
			error={errors.name}
			errorMessage="Must only contain alphabetical characters and be 5 to 30 characters long."
			placeholder="Full Name"
		/>
		<Input
			on:input={handle}
			on:submit={submit}
			{disableSubmit}
			disableInput={submitting}
			error={errors.email || emailInUseError}
			placeholder="Email"
			errorMessage={emailInUseError ? "Email already in use." : "Must be a valid email address."}
			type="email"
		/>

		<Button
			disabled={disableSubmit}
			on:click={submit}
			class="mt-6 w-full {submitting ? 'animate-pulse disabled:opacity-100' : ''}"
		>
			Continue
		</Button>

		<div class="flex items-center gap-3 text-neutral-600 my-4 select-none">
			<div class="border-[0.5px] h-min w-1/2 border-current"></div>
			<p class="text-sm font-bold">OR</p>
			<div class="border-[0.5px] h-min w-1/2 border-current"></div>
		</div>

		<a
			href="/signup/google"
			class="border-1 border-neutral-700 rounded-xl px-3 py-3 font-semibold flex items-center gap-2 w-full select-none"
			on:click={() => {}}
		>
			<GoogleIcon class="w-6 h-6" />
			<p>Continue with Google</p>
		</a>

		{#if googleOauthError}
			<p transition:slide={{ duration: 100 }} class="text-red-500 font-semibold text-sm">
				{googleOauthError}
			</p>
		{/if}
	{:else}
		<p>
			An email was sent to the address {input.email}. Please open it and follow the contained
			instructions to verify that you own this email address.
		</p>
		<p>
			You may resend the email every 30 minutes. This can be done by clicking the button below or
			logging in at a later time.
		</p>

		<EmailVerificationButtons email={input.email} />
	{/if}

	<a href="/login" class:hidden={verifyEmailView} class="text-white underline mt-4" slot="extra"
		>Log In</a
	>
</AltPage>
