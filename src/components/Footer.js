import React from 'react'
import BaLogo from '../images/ba-logo-white.inline.svg'
import styles from './styles/footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.maxWidth}>
				<div className={styles.logo}>
					<div className={styles.icon}>
						<BaLogo />
					</div>
					B-Almus
				</div>
				<div className={styles.links}>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/SnekNOTSnake"
					>
						<svg
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>GitHub</title>
							<path
								fill="#fff"
								d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							/>
						</svg>
					</a>
					<a href="https://www.reddit.com/user/SnekNOTSnake">
						<svg
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Reddit</title>
							<rect fill="#fff" x="4" y="4" width="16" height="16" />
							<path
								fill="#FF4301"
								d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
							/>
						</svg>
					</a>
					<a href="https://www.deviantart.com/sneknotsnake">
						<svg
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>DeviantArt</title>
							<path
								fill="#05CC46"
								d="M19.207 4.794l.23-.43V0H15.07l-.436.44-2.058 3.925-.646.436H4.58v5.993h4.04l.36.436-4.175 7.98-.24.43V24H8.93l.436-.44 2.07-3.925.644-.436h7.35v-5.993h-4.05l-.36-.438 4.186-7.977z"
							/>
						</svg>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://lichess.org/@/SnekNOTSnake2"
					>
						<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
							<title>Lichess</title>
							<path
								fill="#fff"
								strokeLinejoin="round"
								d="M38.956.5c-3.53.418-6.452.902-9.286 2.984C5.534 1.786-.692 18.533.68 29.364 3.493 50.214 31.918 55.785 41.329 41.7c-7.444 7.696-19.276 8.752-28.323 3.084C3.959 39.116-.506 27.392 4.683 17.567 9.873 7.742 18.996 4.535 29.03 6.405c2.43-1.418 5.225-3.22 7.655-3.187l-1.694 4.86 12.752 21.37c-.439 5.654-5.459 6.112-5.459 6.112-.574-1.47-1.634-2.942-4.842-6.036-3.207-3.094-17.465-10.177-15.788-16.207-2.001 6.967 10.311 14.152 14.04 17.663 3.73 3.51 5.426 6.04 5.795 6.756 0 0 9.392-2.504 7.838-8.927L37.4 7.171z"
							/>
						</svg>
					</a>
					<a href="https://www.youtube.com/channel/UC-xLr--d2B3HA71kuip9pRg">
						<svg
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<title>YouTube</title>
							<rect fill="#fff" x="5" y="5" width="10" height="10" />
							<path
								fill="#DB191F"
								d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
							/>
						</svg>
					</a>
				</div>
				<div>
					Copyright &copy; 2020{' '}
					<a href="https://sns-blog.netlify.app">SnekNOTSnake</a>
				</div>
				<div className={styles.powered}>
					Powered by{' '}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.gatsbyjs.com/"
						className={styles.iconSmall}
					>
						<svg
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<title>Gatsby</title>
							<path
								fill="#663399"
								d="M12.001.007C5.326.007.007 5.326.007 12S5.326 23.995 12 23.995s11.994-5.319 11.994-11.994S18.676.007 12.001.007zM2.614 12.105l9.283 9.283c-5.111 0-9.283-4.172-9.283-9.283zm11.473 9.074L2.823 9.915C3.76 5.743 7.516 2.614 12 2.614a9.476 9.476 0 0 1 7.614 3.86L18.259 7.62a7.657 7.657 0 0 0-6.362-3.337A7.555 7.555 0 0 0 4.7 9.393l9.804 9.805c2.4-.835 4.276-2.92 4.798-5.424h-4.068v-1.773h6.154c0 4.485-3.129 8.24-7.301 9.178z"
							/>
						</svg>
					</a>
					and{' '}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.netlify.com/"
						className={styles.iconSmall}
					>
						<svg
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<title>Netlify</title>
							<path
								fill="#25c7b7"
								d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25L12.132 7.86a1.2 1.2 0 0 1-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 0 1 0-.167.052.052 0 0 0-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 0 1-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 0 1-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 0 1 .824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 0 1 .104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 0 1-.563.125 1.389 1.389 0 0 1-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 0 1 .314 0 1.378 1.378 0 0 1 .344 0l2.735-4.25a1.19 1.19 0 0 1-.334-.824 1.242 1.242 0 0 1 0-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 0 1 .835-.282 1.357 1.357 0 0 1 .397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 0 1 .24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
