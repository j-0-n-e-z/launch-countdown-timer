/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkBlue: 'hsl(236, 21%, 26%)',
				veryDarkBlue: 'hsl(235, 16%, 14%)',
				veryDark: 'hsl(234, 17%, 12%)',
				softRed: 'hsl(345, 95%, 68%)',
				grayBlue: 'hsl(237, 18%, 59%)',
			},
			fontFamily: {
				RedHatText: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				'hills-and-stars':
					'url(/assets/images/pattern-hills.svg), url(/assets/images/bg-stars.svg)',
			},
			backgroundPosition: {
				'pos-desktop': '50% 100%, 50% 0',
				'pos-mobile': '80% 105%, 50% 0',
			},
		},
	},
	plugins: [],
}
