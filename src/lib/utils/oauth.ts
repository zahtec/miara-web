import { dev } from "$app/environment";
import { OAuth2Client } from "google-auth-library";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_KEY } from "$env/static/private";

export const loginOauth = new OAuth2Client({
	clientId: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_KEY,
	redirectUri: dev ? "http://localhost:5173/login/google" : "https://miara.app/login/google"
});

export const signupOauth = new OAuth2Client({
	clientId: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_KEY,
	redirectUri: dev ? "http://localhost:5173/signup/google" : "https://miara.app/signup/google"
});

export const loginAuthLink = loginOauth.generateAuthUrl({
	access_type: "offline",
	scope: [
		"https://www.googleapis.com/auth/userinfo.profile",
		"https://www.googleapis.com/auth/userinfo.email"
	],
	include_granted_scopes: true
});

export const signupAuthLink = signupOauth.generateAuthUrl({
	access_type: "offline",
	scope: [
		"https://www.googleapis.com/auth/userinfo.profile",
		"https://www.googleapis.com/auth/userinfo.email"
	],
	include_granted_scopes: true
});
