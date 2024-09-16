<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { user } from "$lib/state/user";
	import { slide } from "svelte/transition";
	import GoogleIcon from "~icons/bxl/google";
	import { codeRegex, emailRegex } from "$lib/utils/validation";
	import Button from "$lib/components/Button.svelte";
	import MailIcon from "~icons/fluent/mail-16-filled";
	import AltPage from "$lib/components/AltPage.svelte";
	import Input from "$lib/components/forms/Input.svelte";
	import PersonIcon from "~icons/fluent/person-16-filled";
	import PasswordIcon from "~icons/fluent/password-16-filled";
	import EmailVerificationButtons from "$lib/components/EmailVerificationButtons.svelte";

	import type { Login } from "$lib/types/api";
	import { LoginStage } from "$lib/types/enums";
	import Anchor from "$lib/components/Anchor.svelte";

	const enum View {
		Login,
		VerifyEmail,
		CodeLogin
	}

	let view = View.Login;
	let inputError = false;
	let submitting = false;
	let invalidLogin = false;
	let googleOauthError: string | null = null;

	const input = {
		email: "",
		code: ""
	};

	const handle = ({ currentTarget }: Event) => {
		const { placeholder, value } = currentTarget as HTMLInputElement;

		invalidLogin = false;

		if (placeholder === "Email") {
			inputError = !emailRegex.test(value);
			input.email = value;
		} else {
			inputError = value.length !== 8 || !codeRegex.test(value);
			input.code = value;
		}
	};

	const submit = () => {
		submitting = true;

		fetch("/api/login", {
			method: "POST",
			body: JSON.stringify({
				email: input.email,
				code: input.code || null,
				stage: view === View.Login ? LoginStage.CodeRequest : LoginStage.CodeVerify
			} satisfies Login.Request)
		}).then(async (res) => {
			submitting = false;

			if (res.status === 401) return (invalidLogin = true);
			else if (res.status === 400) return (view = View.VerifyEmail);
			else if (res.status === 500)
				return alert(
					"An internal error has occured. If you see this message, please notify Miara by emailing support@miara.app."
				);

			if (view === View.Login) view = View.CodeLogin;
			else user.set((await res.json()) as Login.Response);

			goto("/account");
		});
	};

	onMount(
		() => (googleOauthError = new URLSearchParams(window.location.search).get("google_error"))
	);
</script>

<svelte:head>
	<title>Login — Miara</title>
</svelte:head>

<AltPage class="gap-2">
	<div class="flex justify-between items-center mb-8">
		<h1 class="font-bold text-xl">
			{view === View.Login
				? "Login"
				: view === View.VerifyEmail
					? "Verify Your Email"
					: "Enter Login Code"}
		</h1>

		<svelte:component
			this={view === View.Login ? PersonIcon : view === View.VerifyEmail ? MailIcon : PasswordIcon}
			class="w-8 h-8"
		/>
	</div>

	{#if view === View.Login}
		{@const disableSubmit = !input.email.length || inputError || invalidLogin}

		<Input
			on:input={handle}
			on:submit={submit}
			{disableSubmit}
			disableInput={submitting}
			error={inputError}
			errorMessage="Must be a valid email."
			type="email"
			placeholder="Email"
		/>

		<Button
			on:click={submit}
			disabled={disableSubmit}
			class="mt-8 ml-auto py-1 w-full {submitting ? 'animate-pulse disabled:opacity-100' : ''}"
		>
			Continue
		</Button>

		{#if invalidLogin}
			<p
				transition:slide={{ duration: 100 }}
				class="text-red-500 font-semibold text-center text-sm mt-2"
			>
				Invalid email.
			</p>
		{/if}

		<div class="flex items-center gap-3 text-neutral-600 my-4 select-none">
			<div class="border-[0.5px] h-min w-1/2 border-current" />
			<p class="text-sm font-bold">OR</p>
			<div class="border-[0.5px] h-min w-1/2 border-current" />
		</div>

		<a
			href="/login/google"
			class="bg-neutral-800 border-1 border-neutral-700 rounded-xl px-3 py-3 font-semibold flex items-center gap-2 w-full select-none"
		>
			<GoogleIcon class="w-6 h-6" />
			<p>Continue with Google</p>
		</a>

		{#if googleOauthError}
			<p transition:slide={{ duration: 100 }} class="text-red-500 font-semibold text-sm">
				{googleOauthError}
			</p>
		{/if}
	{:else if view === View.VerifyEmail}
		<p>
			Before using your Miara account, your email must be verified. Please check your email {input.email}
			and follow the instructions contained within the email Miara sent you.
		</p>

		<p>
			If you do not see the email or the verification link has expired, you may resend the
			verification email by clicking the button below.
		</p>

		<EmailVerificationButtons email={input.email} />
	{:else}
		{@const disableSubmit = !input.code.length || inputError}

		<Input
			on:input={handle}
			on:submit={submit}
			{disableSubmit}
			disableInput={submitting}
			error={inputError}
			errorMessage="Must be a valid login code."
			type="email"
			placeholder="Login Code"
		/>

		<p class="mt-2">A login code was sent to your inbox. Please enter it here to login.</p>

		<Anchor href="https://mail.google.com" target="_blank" class="w-full mt-8">Open Gmail</Anchor>
		<Button
			on:click={submit}
			disabled={disableSubmit}
			class="ml-auto py-1 w-full {submitting ? 'animate-pulse disabled:opacity-100' : ''}"
		>
			Login
		</Button>
	{/if}

	<a href="/signup" class:hidden={view !== View.Login} class="underline mt-4" slot="extra">
		Sign Up
	</a>
</AltPage>
