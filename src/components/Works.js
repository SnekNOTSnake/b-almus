import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Element } from 'react-scroll'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import styles from './styles/works.module.css'

SwiperCore.use([Pagination])

const Works = () => {
	const data = useStaticQuery(graphql`
		query {
			allWorksJson {
				edges {
					node {
						id
						title
						description
						date
						src {
							childImageSharp {
								fluid(
									maxWidth: 350
									maxHeight: 240
									quality: 90
									traceSVG: { background: "#ddd", color: "#fff" }
								) {
									...GatsbyImageSharpFluid_tracedSVG
								}
							}
						}
					}
				}
			}
		}
	`)

	const works = data.allWorksJson.edges

	return (
		<section className={styles.worksComponent}>
			<Element name="works">
				<div className={styles.slant} />
				<div className={styles.content}>
					<h2>Our Works</h2>
					<p>Some showcases of what we have built</p>
					<Swiper
						centeredSlides={true}
						slidesPerView="auto"
						className={styles.works}
						pagination={{
							clickable: true,
							renderBullet: (index, className) =>
								`<div class="${className}"></div>`,
						}}
					>
						{works.map(({ node }) => (
							<SwiperSlide key={node.id} className={styles.work}>
								<div className={styles.image}>
									<Img
										className={styles.picture}
										fluid={node.src.childImageSharp.fluid}
										alt={node.title}
									/>
								</div>
								<div className={styles.description}>
									<p>{node.title}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Element>
		</section>
	)
}

export default Works
