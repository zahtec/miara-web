<script lang="ts">
	import { goto } from "$app/navigation";
	import { fade, slide } from "svelte/transition";
	import Anchor from "$lib/components/Anchor.svelte";
	import AltPage from "$lib/components/AltPage.svelte";
	import { passwordRegex } from "$lib/utils/validation";
	import Input from "$lib/components/forms/Input.svelte";
	import LinkXIcon from "~icons/fluent/link-dismiss-24-filled";
	import RefreshIcon from "~icons/fluent/arrow-clockwise-16-filled";
	import PasswordRequirements from "$lib/components/forms/PasswordRequirements.svelte";

	import type { PageData } from "./$types";
	import type { PasswordReset } from "$lib/types/api";

	export let data: PageData;

	let submitting = false;
	let errorOccured = false;

	const input = {
		password: "",
		confirmPassword: ""
	};

	const errors = {
		password: false,
		confirmPassword: false
	};

	const handle = ({ currentTarget }: Event) => {
		const { placeholder, value } = currentTarget as HTMLInputElement;

		switch (placeholder.toLowerCase()) {
			case "password":
				input.password = value;
				errors.password = !passwordRegex.test(value);
				errors.confirmPassword = input.password !== value;
				break;
			case "confirm password":
				input.confirmPassword = value;
				errors.confirmPassword = input.password !== value;
				break;
		}
	};

	const submit = () => {
		submitting = true;

		fetch("/api/reset", {
			method: "POST",
			body: JSON.stringify({
				token: data.token!,
				password: input.password
			} satisfies PasswordReset.Request)
		}).then(async (res) => {
			if (res.ok) return goto("/login");

			submitting = false;
			errorOccured = true;
		});
	};
</script>

<svelte:head>
	<title>Reset Password — Miara</title>
</svelte:head>

<AltPage class="gap-2">
	<div
		class:mb-4={data.expired}
		class:mb-8={!data.expired}
		class="flex justify-between items-center"
	>
		<h1 class="font-bold text-xl">
			{data.expired ? "Link Expired" : "Reset Your Password"}
		</h1>

		{#if data.expired}
			<LinkXIcon class="w-8 h-8" />
		{:else}
			<RefreshIcon class="w-8 h-8" />
		{/if}
	</div>

	{#if data.expired}
		<p class="mb-6">
			This password reset link has expired and can not be used. Please request another reset.
		</p>
	{/if}

	{#if !data.expired}
		<Input
			on:input={handle}
			disabled={submitting}
			error={errors.password}
			type="password"
			placeholder="Password"
		/>
		<Input
			on:input={handle}
			disabled={submitting}
			error={errors.confirmPassword}
			type="password"
			placeholder="Confirm password"
		/>

		<PasswordRequirements data={input} />

		<button
			on:click={submit}
			disabled={errors.password ||
				errors.confirmPassword ||
				!input.password.length ||
				!input.confirmPassword.length ||
				submitting}
			class="bg-neutral-800 relative border-1 border-neutral-700 rounded-xl px-6 py-3 font-semibold flex gap-4 items-center justify-between w-full mt-6 h-[3.15rem] select-none transition-opacity duration-200 disabled:opacity-50"
		>
			{#if submitting}
				<p
					out:fade={{ duration: 100 }}
					in:fade={{ delay: 100, duration: 100 }}
					class="mt-0.5 absolute inset-x-0 top-2.5"
				>
					Resetting...
				</p>
			{:else}
				<p
					out:fade={{ duration: 100 }}
					in:fade={{ delay: 100, duration: 100 }}
					class="mt-0.5 absolute inset-x-0 top-2.5"
				>
					Reset Password
				</p>
			{/if}
		</button>

		{#if errorOccured}
			<p transition:slide={{ duration: 100 }} class="text-red-500 font-semibold text-sm">
				An error occured while resetting your password.
			</p>
		{/if}
	{:else}
		<Anchor href="/forgot" class="w-full">Forgot Password</Anchor>
	{/if}
</AltPage>
