import React from 'react'
import { Element } from 'react-scroll'
import styles from './styles/location.module.css'

const Location = () => {
	return (
		<section>
			<Element name="location">
				<div className={styles.maxWidth}>
					<div className={styles.left}>
						<div className={styles.box}></div>
					</div>
					<div className={styles.right}>
						<div className={styles.blue}>Find us</div>
						<h2>Wonosobo, Central Java</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
							quibusdam, cupiditate adipisci exercitationem laudantium veniam.
						</p>
					</div>
				</div>
			</Element>
		</section>
	)
}

export default Location
