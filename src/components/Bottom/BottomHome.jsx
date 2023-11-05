import React from 'react'
import styles from './BottomHome.module.scss'
import ListMenuBottom from './Subcomponents/ListMenuBottom'

const Bottom = () => {
	const title = ['Menu', 'Categories', 'Our company']

	const ItemsOne = [
		'New arrivals',
		'Best sellers',
		'Recently viewed',
		'Popular this week',
		'All products',
	]

	const ItemsTwo = [
		'Crockery',
		'Furniture',
		'Homeware',
		'Plant pots',
		'Chairs',
		'Crockery',
	]

	const ItemsThree = [
		'About us',
		'Vacancies',
		'Contact us',
		'Privacy',
		'Returns policy',
	]

	return (
		<div className={styles.bottom}>
			<div className={styles.container}>
				<div className={styles.bottomInner}>
					<div className={styles.listsBlock}>
						<ListMenuBottom item={ItemsOne} title={title[0]} />
						<ListMenuBottom item={ItemsTwo} title={title[1]} />
						<ListMenuBottom item={ItemsThree} title={title[2]} />
					</div>
					<div className={styles.inputBlock}>
						<h5 className={styles.inputTitle}>Join our mailing list</h5>
						<div className={styles.inputContainer}>
							<input type='email' placeholder='your@email.com' />
							<button>Sign up</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Bottom
