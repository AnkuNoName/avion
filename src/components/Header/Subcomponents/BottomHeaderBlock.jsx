import React from 'react'
import styles from '../Header.module.scss'
import { useState } from 'react'

const BottomHeaderBlock = () => {
	const [startCategories, updateСategories] = useState(1);

	const categories = [
		'All products',
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
