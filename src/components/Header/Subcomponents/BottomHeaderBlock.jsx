import React from 'react'
import styles from '../Header.module.scss'

const BottomHeaderBlock = () => {
	const categories = [
		'Plant pots',
		'Ceramics',
		'Tables',
		'Chairs',
		'Crockery',
		'Tableware',
		'Cutlery',
	]

	return (
		<div className={styles.headerBottom}>
			<ul className={styles.categorisMenu}>
				{categories.map((val, index) => (
					<li key={index}>
						<a href='#'>{val}</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default BottomHeaderBlock
