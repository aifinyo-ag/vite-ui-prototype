/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#53BE7E",
				secondary: "#EAEAEA",
				dark: "#333333",
				gray: "#B0B0B0",
				light: "#FFFFFF",
				alert: "#A93537",
				success: "#53BE7E",
				info: "#CEE5F0",
				warn: "#FCCF04",
				darkgreen: "#245441",
				mediumgreen: "#96B4A6",
				lightgreen: "#D8E7E1",
				darkblue: "#3484AB",
				blue: "#90CAF9",
				lightblue: "#CEE5F0",
				hover: "#EBF3F0",
			},
		},
	},
	plugins: [],
};
