import React from 'react'
import styles from './styles/button.module.css'
import offset from '../utils/offset'

const Button = ({
	children,
	duration = 750,
	rippleColor = '#fff',
	...args
}) => {
	const [ripples, setRipples] = React.useState([])

	const buttonEl = React.useRef(null)

	// Cleaning up ripples
	React.useEffect(() => {
		let bounce = null

		if (ripples.length) {
			bounce = setTimeout(() => {
				setRipples([])
			}, duration * 2)
		}

		return () => clearTimeout(bounce)
	}, [ripples, duration])

	const showRipple = (e) => {
		const button = e.currentTarget.getBoundingClientRect()
		const size = button.width > button.height ? button.width : button.height

		// Suspicious
		const offsets = offset(buttonEl.current)
		const x = e.pageX - offsets.left - size / 2
		const y = e.pageY - offsets.top - size / 2

		const newRipple = { x, y, size }

		setRipples((initVal) => initVal.concat(newRipple))
	}

	return (
		<button
			onClick={showRipple}
			ref={buttonEl}
			className={styles.button}
			{...args}
		>
			{children}
			<div className={styles.rippleContainer}>
				{ripples.map((ripple, i) => (
					<span
						key={i}
						style={{
							left: ripple.x,
							top: ripple.y,
							width: ripple.size,
							height: ripple.size,
							backgroundColor: rippleColor,
						}}
					/>
				))}
			</div>
		</button>
	)
}

export default Button
