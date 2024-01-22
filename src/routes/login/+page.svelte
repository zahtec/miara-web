<script lang="ts">
	import { goto } from "$app/navigation";
	import { slide } from "svelte/transition";
	import GoogleIcon from "~icons/bxl/google";
	import { emailRegex } from "$lib/utils/validation";
	import Button from "$lib/components/Button.svelte";
	import MailIcon from "~icons/fluent/mail-16-filled";
	import AltPage from "$lib/components/AltPage.svelte";
	import FacebookIcon from "~icons/bxl/facebook-circle";
	import Input from "$lib/components/forms/Input.svelte";
	import PersonIcon from "~icons/fluent/person-16-filled";

	import type { Login } from "$lib/types/api";
	import EmailVerificationButtons from "$lib/components/EmailVerificationButtons.svelte";

	let emailError = false;
	let submitting = false;
	let invalidLogin = false;
	let verifyEmailView = false;

	const input = {
		email: "",
		password: ""
	};

	const handle = ({ currentTarget }: Event) => {
		const { placeholder, value } = currentTarget as HTMLInputElement;

		invalidLogin = false;

		if (placeholder === "Email") {
			console.log(emailRegex.test(value));
			emailError = !emailRegex.test(value);
			input.email = value;
		} else input.password = value;
	};

	const submit = () => {
		submitting = true;
		fetch("/api/login", {
			method: "POST",
			body: JSON.stringify({
				email: input.email,
				password: input.password
			} satisfies Login.Request)
		}).then((res) => {
			submitting = false;

			if (res.status === 401) return (invalidLogin = true);
			else if (res.status === 400) return (verifyEmailView = true);
			else if (res.status === 500)
				return alert(
					"An internal error has occured. If you see this message, please notify Miara by emailing support@miara.app."
				);

			goto("/account");
		});
	};
</script>

<svelte:head>
	<title>Log In — Miara</title>
</svelte:head>

<AltPage class="gap-2">
	<div class="flex justify-between items-center mb-8">
		<h1 class="font-bold text-xl">{verifyEmailView ? "Verify Your Email" : "Log In"}</h1>
		<svelte:component this={verifyEmailView ? MailIcon : PersonIcon} class="w-8 h-8" />
	</div>

	{#if !verifyEmailView}
		<Input
			on:input={handle}
			disabled={submitting}
			error={emailError}
			errorMessage="Must be a valid email."
			type="email"
			placeholder="Email"
		/>
		<Input on:input={handle} disabled={submitting} type="password" placeholder="Password" />
		<a href="/reset" class="ml-auto mt-1 w-fit text-sm font-medium underline">Forgot Password</a>

		<Button
			on:click={submit}
			disabled={!input.email.length || !input.password.length || emailError || invalidLogin}
			class="mt-8 ml-auto py-1 w-full {submitting ? 'animate-pulse disabled:opacity-100' : ''}"
		>
			Continue
		</Button>

		{#if invalidLogin}
			<p transition:slide={{ duration: 100 }} class="text-red-500 font-semibold text-sm mt-2">
				Invalid email or password.
			</p>
		{/if}

		<div class="flex items-center gap-3 text-neutral-600 my-4 select-none">
			<div class="border-[0.5px] h-min w-1/2 border-current" />
			<p class="text-sm font-bold">OR</p>
			<div class="border-[0.5px] h-min w-1/2 border-current" />
		</div>

		<a
			href="/auth/google"
			class="bg-neutral-800 border-1 border-neutral-700 rounded-xl px-3 py-3 font-semibold flex items-center gap-2 w-full select-none"
			on:click={() => {}}
		>
			<GoogleIcon class="w-6 h-6" />
			<p>Continue with Google</p>
		</a>
		<a
			href="/auth/google"
			class="bg-neutral-800 border-1 border-neutral-700 rounded-xl px-3 py-3 font-semibold flex items-center gap-2 w-full select-none"
			on:click={() => {}}
		>
			<FacebookIcon class="w-6 h-6" />
			<p>Continue wth Facebook</p>
		</a>
	{:else}
		<p>
			Before using your Miara account, your email must be verified. Please check your email {input.email}
			and follow the instructions contained within the email Miara sent you.
		</p>

		<p>
			If you do not see the email or the verification link has expired, you may resend the
			verification email by clicking the button below.
		</p>

		<EmailVerificationButtons email={input.email} />
	{/if}

	<a href="/signup" class:hidden={verifyEmailView} class="underline mt-4" slot="extra">Sign Up</a>
</AltPage>
