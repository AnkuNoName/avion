import React from 'react'
import styles from './SiteInfoTop.module.scss'

const SiteInfoTop = () => {
	return (
		<div className={styles.infoTop}>
			<div className={styles.container}>
				<div className={styles.infoTopInner}>
					<div className={styles.textInfoBlock}>
						<div className={styles.infoBlockTitle}>
							<h2>The furniture brand for the future, with timeless designs</h2>
						</div>

						<div className={styles.viewBtnBlock}>
							<button>View collection</button>
						</div>

						<div className={styles.textBlock}>
							A new era in eco friendly furniture with Avelon, the French luxury
							retail brand with nice fonts, tasteful colors and a beautiful way
							to display things digitally using modern web technologies.
						</div>
					</div>
					<div className={styles.imgInfoBlock}>
						<img src='img/topInfoHome.png' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SiteInfoTop
