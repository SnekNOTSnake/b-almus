import React from 'react'
import { Element } from 'react-scroll'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import styles from './styles/location.module.css'
import 'leaflet/dist/leaflet.css'

const Location = () => {
	// Using this method because Gatsby is considered SSR
	React.useEffect(() => {
		const L = require('leaflet')

		// Manually set the marker icon
		// because there's a problem when using the default way
		delete L.Icon.Default.prototype._getIconUrl
		L.Icon.Default.mergeOptions({
			iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
			iconUrl: require('leaflet/dist/images/marker-icon.png'),
			shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
		})
	}, [])

	const state = {
		lat: -7.332091,
		lng: 109.914998,
		zoom: 16,
	}
	const center = [state.lat, state.lng]

	return (
		<section>
			<Element name="location">
				<div className={styles.maxWidth}>
					<div className={styles.left}>
						<div className={styles.box}>
							{typeof window !== 'undefined' && (
								<Map className={styles.map} center={center} zoom={state.zoom}>
									<TileLayer
										attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
									/>
									<Marker position={center}>
										<Popup>
											B-Almus Civil Engineer
											<br />
											<a
												target="_blank"
												rel="noreferrer"
												href="https://www.google.co.uk/maps/place/B-Almus+Civil+Engineer/@-7.332091,109.914998,21z/"
											>
												Google Maps
											</a>
										</Popup>
									</Marker>
								</Map>
							)}
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.blue}>Find us</div>
						<h2>Wonosobo, Central Java</h2>
						<p>
							Based on G11, Rt02/07, Manggisan Permai, Mudal, Mojotengah,
							Wonosobo, we welcome anybody but burglars who want to give us a
							visit.
						</p>
					</div>
				</div>
			</Element>
		</section>
	)
}

export default Location
