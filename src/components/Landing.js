import React from 'react'
import { Link } from 'react-scroll'
import Button from './Button'
import baLogo from '../images/ba-logo-white.svg'
import illustration from '../images/illustration.svg'
import styles from './styles/landing.module.css'

const Landing = () => {
	return (
		<section className={styles.root}>
			<nav className={styles.nav}>
				<div className={styles.navBody}>
					<a href="http://localhost:8000" className={styles.logo}>
						<div className={styles.icon}>
							<img src={baLogo} alt="B-Almus" />
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
									offset={-100}
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
									offset={-150}
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
									offset={-100}
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
									offset={-100}
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
					offset={-100}
					duration={500}
				>
					<Button rippleColor="#3f95e6" type="button">
						learn more
					</Button>
				</Link>
			</div>

			<div className={styles.illustration}>
				<div className={styles.illustrationBody}>
					<img src={illustration} alt="Construction Illustration" />
				</div>
			</div>
		</section>
	)
}

export default Landing
