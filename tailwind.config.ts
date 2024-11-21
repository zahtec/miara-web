import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";
import mask from "tailwind-gradient-mask-image";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		transitionDelay: {},
		extend: {
			animationDelay: {},
			screens: {
				xs: "580px",
				md: "800px"
			},
			transitionProperty: {
				border: "border"
			},
			fontFamily: {
				sans: ['"Mona Sans"', ...fontFamily.sans]
			},
			spacing: {
				18: "4.5rem"
			},
			borderWidth: {
				1: "1px"
			},
			fontSize: {
				"3xl": ["1.75rem", "2.25rem"],
				"4xl": ["2rem", "2.5rem"],
				"5xl": ["2.5rem", "1.1"],
				"6xl": ["3rem", "1.1"],
				"7xl": ["3.5rem", "1.1"],
				"8xl": ["4rem", "1.1"]
			},
			animation: {
				"fade-in": "fade-in 700ms ease forwards"
			},
			keyframes: {
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(-10px)" },
					"100%": { opacity: "1" }
				}
			},
			maxWidth: {
				primary: "1150px"
			},
			colors: {
				cream: {
					50: "#fffcf8",
					100: "#fffaf1",
					200: "#fff8e9",
					300: "#fff6e2",
					400: "#fff4db",
					500: "#fff2d3",
					600: "#fff0cb",
					700: "#ffeec3",
					800: "#ffecba",
					900: "#ffeab1"
				}
			}
		}
	},
	plugins: [
		plugin(({ addUtilities }) =>
			addUtilities(
				Object.fromEntries(
					Object.entries({
						none: "0s",
						75: "75ms",
						100: "100ms",
						150: "150ms",
						200: "200ms",
						300: "300ms",
						400: "400ms",
						500: "500ms",
						600: "600ms",
						700: "700ms",
						800: "800ms",
						900: "900ms",
						1000: "1000ms"
					}).map(([key, value]) => [
						`.delay-${key}`,
						{ "transition-delay": value, "animation-delay": value }
					])
				)
			)
		),
		mask
	]
} satisfies Config;
