import styles from "../Header.module.scss";
import { Link } from 'react-router-dom'

const TopHeaderBlock = () => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.sarchBurgerBlock}>
        <div className={styles.serch}>
          <img src="img/search.svg" alt="Search" />
        </div>

        <div className={styles.burgerMenu}>
          <img src="img/burger-menu.svg" alt="" />
        </div>
      </div>

      <div className={styles.logo}>
        <Link to="/"><h3>Avion</h3></Link>
      </div>

      <div className={styles.navIcons}>
        <div className={styles.navIcon}>
          <a href="">
            <img src="img/headerCart.svg" alt="Cart" />
          </a>
        </div>
        <div className={styles.navIcon}>
          <a href="">
            <img src="img/headerAvatar.svg" alt="Avatar" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderBlock;
