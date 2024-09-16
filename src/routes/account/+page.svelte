<script lang="ts">
	import { nameRegex } from "$lib/utils/validation";
	import Banner from "$lib/components/Banner.svelte";
	import Button from "$lib/components/Button.svelte";
	import SaveIcon from "~icons/fluent/save-16-filled";
	import SettingsIcon from "~icons/fluent/settings-20-filled";
	import PageContent from "$lib/components/PageContent.svelte";
	import UserInput from "$lib/components/account/UserInput.svelte";
	import UserToggle from "$lib/components/account/UserToggle.svelte";

	import type { PageData } from "./$types";
	import type { User } from "$lib/types/api";

	export let data: PageData;

	let nameError = false;
	let submitting = false;
	let originalState = JSON.stringify(data);
	$: isDirty = originalState !== JSON.stringify(data);

	const onInput = ({ currentTarget }: Event) => {
		const { value } = currentTarget as HTMLInputElement;

		nameError = !nameRegex.test(value) || value.length < 5 || value.length > 30;
		data.name = value;
	};

	const submit = () => {
		submitting = true;

		fetch("/api/user", {
			method: "PATCH",
			body: JSON.stringify({
				name: data.name,
				phone: data.phone ?? undefined,
				emailNotifications: data.emailNotifications
			} satisfies User.Request)
		}).then(() => {
			submitting = false;
			data = { ...data, name: data.name.trim() };
			originalState = JSON.stringify(data);
		});
	};
</script>

<Banner
	title="Account"
	description="Manage your account information and preferences."
	icon={SettingsIcon}
	class="from-purple-950 to-purple-700"
/>

<PageContent
	class="max-w-screen-md flex flex-col gap-6 md:py-8 lg:flex lg:gap-8 lg:justify-center lg:max-w-primary"
>
	<UserInput
		label="Full Name"
		value={data.name}
		on:input={onInput}
		on:submit={submit}
		disableInput={submitting}
		disableSubmit={!isDirty || nameError}
		error={nameError}
		errorMessage="Must only contain alphabetical characters and be 5 to 30 characters long."
	/>
	<UserInput label="Email" value={data.email} disableInput={true} disableSubmit={true} />

	<UserToggle
		label="Email Notifications"
		bind:value={data.emailNotifications}
		disabled={submitting}
	/>

	<Button
		class="w-full mt-auto max-w-60 ml-auto xs {submitting
			? 'animate-pulse disabled:opacity-100'
			: ''}"
		icon={SaveIcon}
		disabled={!isDirty || nameError}
		on:click={submit}
	>
		Save Changes
	</Button>
</PageContent>
