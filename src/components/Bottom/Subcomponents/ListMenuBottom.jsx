import React from 'react'
import styles from './ListMenuBottom.module.scss'

const ListMenuBottom = ({ item, title }) => {
	return (
		<div className={styles.listMenu}>
			<div className={styles.inner}>
				<div className={styles.title}>
					<h5>{title}</h5>
				</div>
				<ul>
					{item.map((element, index) => (
						<li className={styles.menuItem} key={index}>
							<a href='#'>{element}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default ListMenuBottom
