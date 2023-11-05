import React from 'react'
import styles from './About.module.scss'

const About = () => {
	const img = [
		'img/about-icon1.svg',
		'img/about-icon2.svg',
		'img/about-icon3.svg',
		'img/about-icon4.svg',
	]
	const title = [
		'Next day as standard',
		'Made by true artisans',
		'Unbeatable prices',
		'Recycled packaging',
	]
	const text = [
		'Order before 3pm and get your order the next day as standard',
		'Handmade crafted goods made with real passion and craftmanship',
		'For our materials and quality you won’t find better prices anywhere',
		'We use 100% recycled packaging to ensure our footprint is manageable',
	]

	return (
		<div className={styles.about}>
			<div className={styles.container}>
				<div className={styles.aboutInner}>
					<div className={styles.aboutTitle}>
						<h3>What makes our brand different</h3>
					</div>

					<div className={styles.itemContainer}>
						{img.map((src, index) => (
							<div key={index} className={styles.item}>
								<div className={styles.itemImg}>
									<img src={src} />
								</div>

								<div className={styles.itemTitle}>
									<h4>{title[index]}</h4>
								</div>

								<div className={styles.itemText}>
									<p>{text[index]}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
