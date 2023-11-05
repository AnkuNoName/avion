import styles from '../Header.module.scss'

const HeaderIconLink = () => {
	return (
		<div className={styles.navIcons}>
			<div className={styles.navIcon}>
				<a href=''>
					<img src='img/headerCart.svg' alt='Cart' />
				</a>
			</div>
			<div className={styles.navIcon}>
				<a href=''>
					<img src='img/headerAvatar.svg' alt='Avatar' />
				</a>
			</div>
		</div>
	)
}

export default HeaderIconLink
