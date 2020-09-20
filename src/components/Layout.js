import React from 'react'
import Footer from './Footer'
import Works from './Works'
import Contact from './Contact'
import Location from './Location'
import './styles/global.css'
import '../fonts/roboto/stylesheet.css'
import './styles/layout.module.css'

const Layout = ({ children }) => {
	return (
		<div>
			<main>{children}</main>
			<Works />
			<Location />
			<Contact />
			<Footer />
		</div>
	)
}

export default Layout
