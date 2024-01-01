import React, { useEffect, useState } from 'react';
import styles from './NewProdBlock.module.scss';
import ItemBlock from '../../ItemBlock';
import { Link } from 'react-router-dom';

const NewProdBlock = () => {
  const [items, getItem] = useState([]);

  useEffect(() => {
    fetch('https://3594f01f5a3fd252.mokky.dev/itemsTwo?category=2')
      .then((res) => {
        return res.json();
      })
      .then((json) => getItem(json));
  }, []);

  return (
    <div className={styles.newProdBlock}>
      <div className={styles.container}>
        <div className={styles.newProdInner}>
          <div className={styles.newProdTitle}>
            <h2>New ceramics</h2>
          </div>

          <div className={styles.newProdItem}>
            {items.slice(0, 4).map((obj) => (
              <ItemBlock key={obj.id} {...obj} />
            ))}
          </div>

          <div className={styles.viewBtnBlock}>
            <Link to="catalog.html">
              <button>View collection</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProdBlock;
