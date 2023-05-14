/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				"primary-color":"black",
				"secondary-color":"gray",
				"neutral-color" : colors.gray[400]
			},
			aspectRatio : {
				"slim" : "16/6"
			},
			fontFamily : {
				"hand-petit" : ['Petit Formal Script', "cursive"],
				"hand-sofia" : ['Sofia', "serif"],
				"hand-arizona": ['Arizonia', 'cursive'],
				"hand-vibes": ['Great Vibes', 'cursive'],
				"hand-saint": ['Mrs Saint Delafield', 'cursive'],
				"hand-dancing": ['Dancing Script', 'cursive'],
				"bilal": ["bilal", 'cursive'],
				"cookie": ["cookie", 'cursive'],

			}
		},
	},
	plugins: [
		plugin(function ({ addBase, addComponents, addUtilities, theme }) {
			  addUtilities({
				'.paused': {
				  animationPlayState : 'paused'
				}
			  })
		})
	  ]
}
