import styles from "../Header.module.scss";
import SerchHeader from './SerchHeader'
import HeaderLogo from './HeaderLogo'
import HeaderIconLink from './HeaderIconLink'

const TopHeaderBlock = () => {
	return (
		<div className={styles.headerTop}>
			<SerchHeader />
			<HeaderLogo />
			<HeaderIconLink />
		</div>
	)
}

export default TopHeaderBlock
