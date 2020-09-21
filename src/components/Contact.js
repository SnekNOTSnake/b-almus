import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faMapMarkerAlt,
	faEnvelope,
	faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { Element } from 'react-scroll'
import Button from './Button'
import styles from './styles/contact.module.css'

const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/

const Contact = () => {
	const { register, handleSubmit, errors } = useForm()
	const submitHandler = (val) => {
		console.log(val)
	}

	return (
		<section>
			<Element name="contact">
				<div className={styles.maxWidth}>
					<div className={styles.left}>
						<div className={styles.blue}>Contact us</div>
						<h2>Send us a message</h2>
						<form onSubmit={handleSubmit(submitHandler)}>
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
							<Button type="submit">Submit</Button>
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
