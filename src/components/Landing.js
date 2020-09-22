import React from 'react'
import { Link } from 'react-scroll'
import Button from './Button'
import BaLogo from '../images/ba-logo-white.inline.svg'
import Illustration from '../images/illustration.inline.svg'
import styles from './styles/landing.module.css'

const Landing = () => {
	return (
		<section className={styles.root}>
			<nav className={styles.nav}>
				<div className={styles.navBody}>
					<a href="http://localhost:8000" className={styles.logo}>
						<div className={styles.icon}>
							<BaLogo />
						</div>
						B-Almus
					</a>
					<div className={styles.items}>
						<ul>
							<li>
								<Link
									activeClass="active"
									to="about"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="works"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
								>
									Works
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="location"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
								>
									Location
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									to="contact"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div className={styles.text}>
				<div className={styles.subtitle}>Civil Engineering</div>
				<h1>
					BUILD AND FIX YOUR
					<br />
					HOUSE WITH US
				</h1>
				<Link
					activeClass="active"
					to="about"
					spy={true}
					smooth={true}
					offset={-50}
					duration={500}
				>
					<Button rippleColor="#2196f3" type="button">
						learn more
					</Button>
				</Link>
			</div>

			<div className={styles.illustration}>
				<div className={styles.illustrationBody}>
					<Illustration />
				</div>
			</div>
		</section>
	)
}

export default Landing
