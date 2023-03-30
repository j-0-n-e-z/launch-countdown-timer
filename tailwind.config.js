/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkBlue: 'hsl(236, 21%, 26%)',
				veryDarkBlue: 'hsl(235, 16%, 14%)',
				veryDark: 'hsl(234, 17%, 12%)',
				softRed: 'hsl(345, 95%, 68%)',
				grayBlue: 'hsl(237, 18%, 59%)'
			}
		}
	},
	plugins: []
}
