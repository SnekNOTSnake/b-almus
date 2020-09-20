import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import clsx from 'clsx'
import { Element } from 'react-scroll'
import styles from './styles/works.module.css'

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
								fixed(width: 350, height: 240, cropFocus: NORTH, quality: 90) {
									...GatsbyImageSharpFixed_tracedSVG
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
					<p>Lorem ipsum something cool</p>
					<div className={styles.works}>
						{works.map(({ node }) => (
							<div key={node.id} className={styles.work}>
								<div className={styles.image}>
									<Img
										className={styles.picture}
										fixed={node.src.childImageSharp.fixed}
										alt={node.title}
									/>
								</div>
								<div className={styles.description}>
									<p>{node.title}</p>
								</div>
							</div>
						))}
					</div>
					<div className={styles.pagination}>
						<div className={styles.paginationItem} />
						<div
							className={clsx(
								styles.paginationItem,
								styles.paginationItemActive,
							)}
						/>
						<div className={styles.paginationItem} />
					</div>
				</div>
			</Element>
		</section>
	)
}

export default Works
