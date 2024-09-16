import { dev } from "$app/environment";
import { BREVO_API_KEY } from "$env/static/private";
import { GetAccountAllOfPlan } from "@getbrevo/brevo";

import type { GetAccount, SendSmtpEmail } from "@getbrevo/brevo";

// TODO: Failsafe
export const failsafe = async () =>
	(
		(await fetch("https://api.brevo.com/v3/account", {
			headers: {
				"api-key": BREVO_API_KEY
			}
		}).then((res) => res.json())) as GetAccount
	).plan.find(({ type }) => type === GetAccountAllOfPlan.TypeEnum.Free)!.credits < 1;

export const sendCodeEmail = (email: string, code: string) =>
	fetch("https://api.brevo.com/v3/smtp/email", {
		method: "POST",
		headers: {
			"api-key": BREVO_API_KEY
		},
		body: JSON.stringify({
			to: [
				{
					email
				}
			],
			templateId: 2,
			params: {
				code
			}
		} satisfies SendSmtpEmail)
	});

export const sendVerifyEmail = (email: string, token: string) =>
	fetch("https://api.brevo.com/v3/smtp/email", {
		method: "POST",
		headers: {
			"api-key": BREVO_API_KEY
		},
		body: JSON.stringify({
			to: [
				{
					email
				}
			],
			templateId: 1,
			params: {
				url: dev ? `http://localhost:5173/verify/${token}` : `https://miara.app/verify/${token}`
			}
		} satisfies SendSmtpEmail)
	});
