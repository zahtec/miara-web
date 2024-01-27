<script lang="ts">
	import CheckIcon from "~icons/fluent/checkmark-12-filled";

	export let notMet = false;
	export let noMatch = false;
	export let data: {
		password: string;
		confirmPassword: string;
	};

	const requirements = {
		length: false,
		digits: false,
		capitals: false,
		special: false,
		spaces: false,
		matching: false
	};

	$: if (data.password) {
		requirements.length = data.password.length >= 12;
		requirements.digits = /^(?:[^0-9]*\d){2,}.*$/g.test(data.password);
		requirements.capitals = /^(?:[^A-Z]*[A-Z]){3,}.*$/g.test(data.password);
		requirements.special = /^(?:[a-zA-Z0-9\s]*[^a-zA-Z0-9\s]){1,}.*$/g.test(data.password);
		requirements.spaces = data.password.length > 0 && !/\s/g.test(data.password);
		requirements.matching = data.password.length > 0 && data.password === data.confirmPassword;

		notMet = !(
			requirements.length &&
			requirements.digits &&
			requirements.capitals &&
			requirements.special &&
			requirements.spaces &&
			requirements.matching
		);

		noMatch = !requirements.matching;
	}
</script>

<div class="mt-6">
	<h1 class="font-semibold text-left">Password Requirements</h1>
	<ul class="text-left mt-1">
		<li
			class:text-neutral-600={!requirements.length}
			class="flex gap-1 items-center transition-colors duration-200"
		>
			<CheckIcon class="w-4 h-4" />
			At least 12 characters
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
</div>
