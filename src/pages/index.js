import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Landing from '../components/Landing'
import About from '../components/About'

const Home = () => {
	return (
		<Layout>
			<SEO title="B-Almus" />
			<Landing />
			<About />
		</Layout>
	)
}

export default Home
