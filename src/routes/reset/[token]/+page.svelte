<script lang="ts">
	import { goto } from "$app/navigation";
	import { fade } from "svelte/transition";
	import Button from "$lib/components/Button.svelte";
	import TextInput from "$lib/components/TextInput.svelte";
	import CheckIcon from "~icons/fluent/checkmark-12-filled";
	import PageContent from "$lib/components/PageContent.svelte";
	import LinkXIcon from "~icons/fluent/link-dismiss-24-filled";
	import RefreshIcon from "~icons/fluent/arrow-clockwise-16-filled";

	import type { PageData } from "./$types";
	import type { PasswordReset } from "$lib/types/api";

	export let data: PageData;

	let fetching = false;
	let errorMessage: string | null = null;

	const formData = {
		password: "",
		confirmPassword: ""
	};

	// TODO: Fix page titles

	const requirements = {
		length: false,
		digits: false,
		capitals: false,
		special: false,
		spaces: false,
		matching: false
	};

	$: {
		requirements.length = formData.password.length >= 8;
		requirements.digits = /^(?:[^0-9]*\d){2,}.*$/g.test(formData.password);
		requirements.capitals = /^(?:[^A-Z]*[A-Z]){3,}.*$/g.test(formData.password);
		requirements.special = /^(?:[a-zA-Z0-9\s]*[^a-zA-Z0-9\s]){1,}.*$/g.test(formData.password);
		requirements.spaces = formData.password.length > 0 && !/\s/g.test(formData.password);
		requirements.matching =
			formData.password.length > 0 && formData.password === formData.confirmPassword;
	}

	const submit = () => {
		fetching = true;

		fetch("/api/reset", {
			method: "POST",
			body: JSON.stringify({
				token: data.token!,
				password: formData.password
			} satisfies PasswordReset.Request)
		}).then(async (res) => {
			if (res.ok) return goto("/login");
			fetching = false;
			errorMessage = await res.text();
		});
	};
</script>

<svelte:head>
	<title>Reset Password — Miara</title>
</svelte:head>

<PageContent class="flex flex-col items-center text-center justify-center">
	<div
		class="bg-neutral-900 border-1 border-neutral-700 rounded-xl flex flex-col p-6 w-full max-w-md md:max-w-lg md:py-8 md:px-8"
	>
		<div class:flex={!data.expired} class="gap-4 items-center">
			{#if data.expired}
				<LinkXIcon class="w-14 h-14 mx-auto mb-4 md:w-18 md:h-18" />
			{:else}
				<RefreshIcon class="w-10 h-10 -ml-1 md:w-14 md:h-14" />
			{/if}

			<h1
				class:text-xl={!data.expired}
				class:md:text-2xl={!data.expired}
				class:text-lg={data.expired}
				class:md:text-xl={data.expired}
				class="font-bold"
			>
				{data.expired ? "Link Expired" : "Reset Your Password"}
			</h1>
		</div>

		{#if data.expired}
			<p class="break-words mt-1 md:text-lg">
				This password reset link has expired and can not be used. Please request another reset.
			</p>
		{/if}

		{#if !data.expired}
			<div class="mt-10 flex flex-col gap-3">
				<TextInput bind:value={formData.password} placeholder="Password" />
				<TextInput bind:value={formData.confirmPassword} placeholder="Confirm password" />
			</div>

			<h1 class="font-semibold text-left mt-6">Requirements</h1>
			<ul class="text-left mt-1">
				<li
					class:text-neutral-600={!requirements.length}
					class="flex gap-1 items-center transition-colors duration-200"
				>
					<CheckIcon class="w-4 h-4" />
					At least 8 characters
				</li>
				<li
					class:text-neutral-600={!requirements.digits}
					class="flex gap-1 items-center transition-colors duration-200"
				>
					<CheckIcon class="w-4 h-4" />
					At least 2 digits
				</li>
				<li
					class:text-neutral-600={!requirements.capitals}
					class="flex gap-1 items-center transition-colors duration-200"
				>
					<CheckIcon class="w-4 h-4" />
					At least 3 uppercase letters
				</li>
				<li
					class:text-neutral-600={!requirements.special}
					class="flex gap-1 items-center transition-colors duration-200"
				>
					<CheckIcon class="w-4 h-4" />
					At least 1 special character
				</li>
				<li
					class:text-neutral-600={!requirements.spaces}
					class="flex gap-1 items-center transition-colors duration-200"
				>
					<CheckIcon class="w-4 h-4" />
					No spaces
				</li>
				<li
					class:text-neutral-600={!requirements.matching}
					class="flex gap-1 items-center transition-colors duration-200"
				>
					<CheckIcon class="w-4 h-4" />
					Passwords match
				</li>
			</ul>

			{@const disabled =
				!requirements.length ||
				!requirements.digits ||
				!requirements.capitals ||
				!requirements.special ||
				!requirements.spaces ||
				!requirements.matching}

			<button
				on:click={submit}
				class:opacity-70={disabled || fetching}
				class:pointer-events-none={disabled || fetching}
				class="bg-neutral-800 relative border-1 border-neutral-700 rounded-xl px-6 py-3 font-semibold w-44 text-center h-14 select-none ml-auto mt-10 transition-opacity duration-200"
			>
				{#if fetching}
					<p
						out:fade={{ duration: 100 }}
						in:fade={{ delay: 100, duration: 100 }}
						class="mt-0.5 absolute inset-x-0 top-3.5"
					>
						Resetting...
					</p>
				{:else}
					<p
						out:fade={{ duration: 100 }}
						in:fade={{ delay: 100, duration: 100 }}
						class="mt-0.5 absolute inset-x-0 top-3.5"
					>
						Reset Password
					</p>
				{/if}
			</button>
		{:else}
			<Button href="/forgot" label="Forgot Password" class="mx-auto mt-9" />
		{/if}
	</div>
</PageContent>
