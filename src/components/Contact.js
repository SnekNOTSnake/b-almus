import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faMapMarkerAlt,
	faEnvelope,
	faPhone,
	faCheckCircle,
	faTimes,
} from '@fortawesome/free-solid-svg-icons'
import emailRegex from '../utils/emailRegex'
import encodeUrl from '../utils/encodeUrl'
import { useForm } from 'react-hook-form'
import { Element } from 'react-scroll'
import Button from './Button'
import styles from './styles/contact.module.css'

const Contact = () => {
	const [submitting, setSubmitting] = React.useState(false)
	const [snackbarOpen, setSnackbarOpen] = React.useState(false)
	const [snackbarStatus, setSnackbarStatus] = React.useState('success')
	const [captchaVal, setCaptchaVal] = React.useState(null)
	const [submitted, setSubmitted] = React.useState(false)

	const recaptchaChange = (val) => {
		setCaptchaVal(val)
	}

	const { register, handleSubmit, errors } = useForm()
	const submitHandler = (val) => {
		setSubmitting(true)

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encodeUrl({
				'form-name': 'contact-us',
				'g-recaptcha-response': captchaVal,
				...val,
			}),
		})
			.then(() => {
				setSnackbarOpen(true)
				setSnackbarStatus('success')
				setCaptchaVal(null)
				setSubmitted(true)
			})
			.catch((err) => {
				setSnackbarOpen(true)
				setSnackbarStatus('error')
				console.err(err)
			})
			.finally(() => setSubmitting(false))
	}

	return (
		<section>
			<Element name="contact">
				<div
					className={`${styles.snackbar} ${
						snackbarOpen ? styles.snackbarActive : ''
					}`}
					onClick={(e) => {
						if (e.currentTarget === e.target) {
							setSnackbarOpen(false)
						}
					}}
					onKeyDown={() => {
						setSnackbarOpen(false)
					}}
					role="button"
					tabIndex={0}
				>
					<div
						style={{
							backgroundColor:
								snackbarStatus === 'error' ? '#f44336' : '#4caf50',
						}}
						className={styles.snackbarDialog}
					>
						{snackbarStatus === 'error' ? (
							<div className={styles.snackbarContent}>
								{
									<FontAwesomeIcon
										className={styles.snackbarIcon}
										icon={faTimes}
									/>
								}{' '}
								Failed to send message, please check your connection
							</div>
						) : (
							<div className={styles.snackbarContent}>
								{
									<FontAwesomeIcon
										className={styles.snackbarIcon}
										icon={faCheckCircle}
									/>
								}
								Thank you for contacting us. we'll respond to it later!
							</div>
						)}
					</div>
				</div>

				<div className={styles.maxWidth}>
					<div className={styles.left}>
						<div className={styles.blue}>Contact us</div>
						<h2>Send us a message</h2>
						<form
							name="contact-us"
							data-netlify="true"
							data-netlify-recaptcha="true"
							onSubmit={handleSubmit(submitHandler)}
						>
							<label style={{ display: 'none' }} htmlFor="email">
								Email
							</label>
							<input
								name="email"
								ref={register({ required: true, pattern: emailRegex })}
								placeholder="Email address"
								type="text"
							/>
							{errors.email && (
								<div className={styles.errors}>
									{errors.email.type === 'required' && (
										<div className={styles.error}>Email is required</div>
									)}
									{errors.email.type === 'pattern' && (
										<div className={styles.error}>Invalid Email</div>
									)}
								</div>
							)}
							<label style={{ display: 'none' }} htmlFor="message">
								Message
							</label>
							<textarea
								name="message"
								ref={register({ required: true, minLength: 8 })}
								placeholder="Message"
							/>
							{errors.message && (
								<div className={styles.errors}>
									{errors.message.type === 'required' && (
										<div className={styles.error}>Message body is required</div>
									)}
									{errors.message.type === 'minLength' && (
										<div className={styles.error}>
											Is that what you call a message?
										</div>
									)}
								</div>
							)}
							<div className={styles.recaptcha}>
								<ReCAPTCHA
									sitekey="6LeIyc4ZAAAAAIySGXVhxue--RS9NKFZ8T30M_3Z"
									onChange={recaptchaChange}
								/>
							</div>
							<Button
								darn="boom"
								disabled={submitting || !captchaVal || submitted}
								className={submitting ? styles.loading : ''}
								type="submit"
							>
								Submit
							</Button>
						</form>
					</div>

					<div className={styles.right}>
						<div className={styles.box}>
							<h2>Get in touch</h2>
							<div className={styles.contact}>
								<div className={styles.icon}>
									<FontAwesomeIcon icon={faMapMarkerAlt} />
								</div>
								<div className={styles.text}>
									G11, Jl. Manggisan
									<br />
									56351, Wonosobo
								</div>
							</div>
							<div className={styles.contact}>
								<div className={styles.icon}>
									<FontAwesomeIcon icon={faEnvelope} />
								</div>
								<div className={styles.text}>birunalmustofa@gmail.com</div>
							</div>
							<div className={styles.contact}>
								<div className={styles.icon}>
									<FontAwesomeIcon icon={faPhone} />
								</div>
								<div className={styles.text}>+62 813-2719-1957</div>
							</div>
						</div>
					</div>
				</div>
			</Element>
		</section>
	)
}

export default Contact
