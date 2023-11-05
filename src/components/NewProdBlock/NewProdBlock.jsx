import React, { useEffect, useState } from 'react'
import styles from './NewProdBlock.module.scss'
import ItemBlock from '../ItemBlock'

const NewProdBlock = () => {
	const [items, getItem] = useState([])

	useEffect(() => {
		fetch('https://8318d1a70c1104ca.mokky.dev/items?category=2')
			.then(res => {
				return res.json()
			})
			.then(json => getItem(json))
	}, [])

  console.log(items)
	return (
		<div className={styles.newProdBlock}>
			<div className={styles.container}>
				<div className={styles.newProdInner}>
					<div className={styles.newProdTitle}>
						<h2>New ceramics</h2>
					</div>

					<div className={styles.newProdItem}>
						{items.slice(0, 4).map(obj => (
							<ItemBlock key={obj.id} {...obj} />
						))}
					</div>

					<div className={styles.viewBtnBlock}>
						<button>View collection</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewProdBlock
