import React from 'react'
import Footer from '../components/Footer'
import Works from '../components/Works'
import Contact from '../components/Contact'
import Location from '../components/Location'
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
			<Works />
			<Location />
			<Contact />
			<Footer />
		</Layout>
	)
}

export default Home
