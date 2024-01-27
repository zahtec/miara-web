import { dev } from "$app/environment";
import { OAuth2Client } from "google-auth-library";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_KEY } from "$env/static/private";

export const oauth = new OAuth2Client({
	clientId: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_KEY,
	redirectUri: dev ? "http://localhost:5173/auth/google" : "https://miara.app/auth/google"
});

export const authLink = oauth.generateAuthUrl({
	access_type: "offline",
	scope: [
		"https://www.googleapis.com/auth/userinfo.profile",
		"https://www.googleapis.com/auth/userinfo.email"
	],
	include_granted_scopes: true
});
