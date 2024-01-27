<script lang="ts">
	import GoogleIcon from "~icons/bxl/google";
	import Button from "$lib/components/Button.svelte";
	import MailIcon from "~icons/fluent/mail-16-filled";
	import AltPage from "$lib/components/AltPage.svelte";
	import Input from "$lib/components/forms/Input.svelte";
	import NewPersonIcon from "~icons/fluent/person-add-28-filled";
	import { nameRegex, emailRegex, passwordRegex } from "$lib/utils/validation";
	import PasswordRequirements from "$lib/components/forms/PasswordRequirements.svelte";
	import EmailVerificationButtons from "$lib/components/EmailVerificationButtons.svelte";

	import type { Signup } from "$lib/types/api";

	let submitting = false;
	let verifyEmailView = false;
	let emailInUseError = false;

	const input = {
		name: "",
		email: "",
		password: "",
		confirmPassword: ""
	};

	const errors = {
		name: false,
		email: false,
		password: false,
		confirmPassword: false
	};

	const handle = ({ currentTarget }: Event) => {
		const { placeholder, value } = currentTarget as HTMLInputElement;

		emailInUseError = false;

		switch (placeholder.toLowerCase()) {
			case "name":
				input.name = value;
				errors.name = !nameRegex.test(value) || value.length < 5 || value.length > 30;
				break;
			case "email":
				input.email = value;
				errors.email = !emailRegex.test(value);
				break;
			case "password":
				input.password = value;
				errors.password = !passwordRegex.test(value);
				break;
			case "confirm password":
				input.confirmPassword = value;
				errors.confirmPassword = input.password !== value;
				break;
		}
	};

	const submit = () => {
		submitting = true;

		fetch("/api/signup", {
			method: "POST",
			body: JSON.stringify({
				email: input.email,
				name: input.name,
				password: input.password
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
		<Input
			on:input={handle}
			error={errors.name}
			disabled={submitting}
			errorMessage="Must only contain alphabetical characters and be 5 to 30 characters long."
			placeholder="Name"
		/>
		<Input
			on:input={handle}
			error={errors.email || emailInUseError}
			disabled={submitting}
			placeholder="Email"
			errorMessage={emailInUseError ? "Email already in use." : "Must be a valid email address."}
			type="email"
		/>
		<Input
			on:input={handle}
			error={errors.password}
			disabled={submitting}
			placeholder="Password"
			type="password"
		/>
		<Input
			on:input={handle}
			error={errors.confirmPassword}
			disabled={submitting}
			placeholder="Confirm password"
			type="password"
		/>

		<PasswordRequirements data={input} />

		<Button
			disabled={errors.name ||
				errors.email ||
				errors.password ||
				errors.confirmPassword ||
				!input.name.length ||
				!input.email.length ||
				!input.password.length ||
				!input.confirmPassword.length ||
				submitting}
			on:click={submit}
			class="mt-6 ml-auto py-1 w-full {submitting ? 'animate-pulse disabled:opacity-100' : ''}"
		>
			Continue
		</Button>

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

	<a href="/login" class:hidden={verifyEmailView} class="underline mt-4" slot="extra">Log In</a>
</AltPage>
