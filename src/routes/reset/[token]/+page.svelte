<script lang="ts">
	import { goto } from "$app/navigation";
	import { fade } from "svelte/transition";
	import Anchor from "$lib/components/Anchor.svelte";
	import Input from "$lib/components/forms/Input.svelte";
	import PageContent from "$lib/components/PageContent.svelte";
	import LinkXIcon from "~icons/fluent/link-dismiss-24-filled";
	import RefreshIcon from "~icons/fluent/arrow-clockwise-16-filled";
	import PasswordRequirements from "$lib/components/forms/PasswordRequirements.svelte";

	import type { PageData } from "./$types";
	import type { PasswordReset } from "$lib/types/api";

	export let data: PageData;

	let met: boolean;
	let fetching = false;
	let errorMessage: string | null = null;

	const input = {
		password: "",
		confirmPassword: ""
	};

	const submit = () => {
		fetching = true;

		fetch("/api/reset", {
			method: "POST",
			body: JSON.stringify({
				token: data.token!,
				password: input.password
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
				<Input bind:value={input.password} placeholder="Password" />
				<Input bind:value={input.confirmPassword} placeholder="Confirm password" />
			</div>

			<PasswordRequirements data={input} bind:met />

			<button
				on:click={submit}
				class:opacity-70={!met || fetching}
				class:pointer-events-none={!met || fetching}
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
			<Anchor href="/forgot" class="mx-auto mt-9">Forgot Password</Anchor>
		{/if}
	</div>
</PageContent>
