import type { user } from "$lib/state/user";
import type { Writable } from "svelte/store";

export namespace Signup {
	export type Request = {
		name: string;
		email: string;
		password: string;
	};

	export type Response = undefined;
}

export namespace Login {
	export type Request = {
		email: string;
		password: string;
	};

	export type Response = typeof user extends Writable<infer T> ? T : never;
}

export namespace Verify {
	export type Request = {
		email: string;
	};

	export type Response = undefined;
}

export namespace Save {
	export type Request = {
		serviceId: string;
		saved: boolean;
	};

	export type Response = undefined;
}

export namespace User {
	export type Request = {
		name?: string;
		phone?: string;
		emailNotifications?: boolean;
	};

	export type Response = undefined;
}

export namespace AuthedPasswordResetRequest {
	export type Request = {
		password: string;
		newPassword: string;
	};

	export type Response = undefined;
}

export namespace UnauthedPasswordResetRequest {
	export type Request = {
		email: string;
	};

	export type Response = undefined;
}

export namespace PasswordReset {
	export type Request = {
		token: string;
		password: string;
	};

	export type Response = undefined;
}

export namespace Application {
	export type Request = {
		serviceId: string;
		data: Record<string, string | number>;
	};

	export type Response = {
		id: string;
	};
}
