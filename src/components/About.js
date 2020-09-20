import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHardHat,
	faPoundSign,
	faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { Element, Link } from 'react-scroll'
import styles from './styles/about.module.css'

const Part = ({ icon, title, text, iconStyle = {} }) => (
	<div className={styles.part}>
		<div className={styles.boxIcon}>
			<FontAwesomeIcon style={iconStyle} icon={icon} />
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
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
							consequatur beatae cumque nesciunt quidem quae officia reiciendis
							fuga.
						</p>
						<Link
							activeClass="active"
							to="works"
							spy={true}
							smooth={true}
							offset={-150}
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
								text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat in expedita."
							/>
							<hr />
							<Part
								icon={faPoundSign}
								iconStyle={{ width: '1em' }}
								title="Friendly Prices"
								text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat in expedita."
							/>
							<hr />
							<Part
								icon={faCheck}
								title="The 'ol Reliable"
								text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat in expedita"
							/>
						</div>
					</div>
				</div>
			</Element>
		</section>
	)
}

export default About
