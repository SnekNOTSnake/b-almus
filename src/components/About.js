import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHardHat,
	faMoneyBillAlt,
	faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { Element, Link } from 'react-scroll'
import styles from './styles/about.module.css'

const Part = ({ icon, title, text }) => (
	<div className={styles.part}>
		<div style={{ fontSize: '2em' }} className={styles.boxIcon}>
			<FontAwesomeIcon icon={icon} />
		</div>
		<div>
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	</div>
)

const About = () => {
	return (
		<section className={styles.about}>
			<Element name="about">
				<div className={styles.maxWidth}>
					<div className={styles.left}>
						<div className={styles.blue}>About us</div>
						<h2>B-Almus Civil Engineer</h2>
						<p>
							Specialized in House building, B-Almus has built dozens of large
							projects across Central Java, gaining respect from Civil
							Engineering world.
						</p>
						<Link
							activeClass="active"
							to="works"
							spy={true}
							smooth={true}
							offset={-50}
							duration={500}
						>
							Scroll down
						</Link>
					</div>
					<div className={styles.right}>
						<div className={styles.box}>
							<Part
								icon={faHardHat}
								title="Efficient Working"
								text="Efficiency in time consumed, materials used, and efforts committed"
							/>
							<hr />
							<Part
								icon={faMoneyBillAlt}
								title="Friendly Prices"
								text="Prices scales nicely, no rip-offs or overprices. We know you're a human being too"
							/>
							<hr />
							<Part
								icon={faCheck}
								title="The 'ol Reliable"
								text="There were none complaints about their works, making them a reliable engineer"
							/>
						</div>
					</div>
				</div>
			</Element>
		</section>
	)
}

export default About
