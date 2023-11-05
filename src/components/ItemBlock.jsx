import React from 'react'
import styles from './ItemBlock.module.scss'

function ItemBlock({imgSrc, title, price}) {
	return (
		<div className={styles.itemBlock}>
			<div className={styles.itemBlokImg}>
				<img src={imgSrc} alt='' />
			</div>

			<div className={styles.itemTitle}>
				<h4>{title}</h4>
			</div>

			<div className={styles.itemPrice}>{price}</div>
		</div>
	)
}

export default ItemBlock