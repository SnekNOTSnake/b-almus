const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
	path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
})

module.exports = {
	siteMetadata: {
		title: 'B-Almus',
		description: 'Your house building and improvement company',
		author: 'SnekNOTSnake,Birun Al-Mustofa',
	},
	plugins: [
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-transformer-json',
		{
			// Images
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.join(__dirname, 'src', 'images'),
			},
		},
		{
			// JSON Files
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'json',
				path: path.join(__dirname, 'src', 'assets'),
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
			},
		},
		{
			resolve: 'gatsby-plugin-react-leaflet',
			options: {
				linkStyles: false,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				lang: 'en',
				name: 'B-Almus',
				short_name: 'B-Almus',
				start_url: '/',
				background_color: '#2196f3',
				theme_color: '#2196f3',
				display: 'standalone',
				icon: 'src/images/ba-logo.png',
				icon_options: {
					purpose: 'maskable',
				},
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
	],
}
