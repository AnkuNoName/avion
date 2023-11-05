import React from 'react'
import TopHeaderBlock from './Subcomponents/TopHeaderBlock'
import BottomHeaderBlock from './Subcomponents/BottomHeaderBlock'
import styles from './Header.module.scss'

const HeaderHome = () => {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div className={styles.headerInner}>
					<TopHeaderBlock />
					<BottomHeaderBlock />
				</div>
			</div>
		</div>
	)
}

export default HeaderHome
