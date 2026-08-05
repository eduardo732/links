/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
	theme: {
		extend: {
			colors: {
				blueprint: {
					bg: '#0a0f1e',
					panel: '#101a30',
					line: '#1e3a5f',
					accent: '#22d3ee',
					accent2: '#0ea5e9',
				},
			},
		},
	},
	plugins: [],
}
