import React from 'react'
import './styles/global.css'
import '../fonts/roboto/stylesheet.css'
import './styles/layout.module.css'

const Layout = ({ children }) => {
	return (
		<div>
			<main>{children}</main>
		</div>
	)
}

export default Layout
