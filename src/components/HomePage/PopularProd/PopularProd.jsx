import React, { useEffect, useState } from 'react';
import styles from './PopularProd.module.scss';
import ItemBlock from '../../ItemBlock';
import { Link } from 'react-router-dom';

const PopularProd = () => {
  const [items, getItem] = useState([]);
  const [bigItem, getBigItem] = useState([]);

  useEffect(() => {
    fetch('https://3594f01f5a3fd252.mokky.dev/itemsTwo')
      .then((res) => {
        return res.json();
      })
      .then((json) => getItem(json));
  }, []);

  useEffect(() => {
    fetch('https://3594f01f5a3fd252.mokky.dev/itemsTwo?big=1')
      .then((res) => {
        return res.json();
      })
      .then((json) => getBigItem(json));
  }, []);

  return (
    <div className={styles.popularProdBlock}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Our popular products</h2>
        </div>
        <div className={styles.popularProdInner}>
          <div className={styles.bigItem}>
            {bigItem.slice(0, 1).map((obj) => (
              <ItemBlock key={obj.id} {...obj} />
            ))}
          </div>
          <div className={styles.smallItems}>
            {items.slice(0, 2).map((obj) => (
              <ItemBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>

        <div className={styles.viewBtnBlock}>
          <Link to="catalog.html">
            <button>View collection</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProd;
