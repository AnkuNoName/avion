import React from 'react'
import styles from './GetInTouch.module.scss'

const GetInTouch = () => {
	return (
		<div className={styles.getInTouch}>
			<div className={styles.inner}>
				<div className={styles.textBlock}>
					<div className={styles.title}>
						<h3>
							From a studio in London to a global brand with over 400 outlets
						</h3>
					</div>

					<div className={styles.text}>
						<p>
							When we started Avion, the idea was simple. Make high quality
							furniture affordable and available for the mass market.
						</p>
						<p>
							Handmade, and lovingly crafted furniture and homeware is what we
							live, breathe and design so our Chelsea boutique become the hotbed
							for the London interior design community.
						</p>
					</div>

					<div className={styles.btn}>
						<button type='button'>Get in touch</button>
					</div>
				</div>

				<div className={styles.fotoBlock}>
					<img src='img/home-get-in.png' alt='' />
				</div>
			</div>
		</div>
	)
}

export default GetInTouch
