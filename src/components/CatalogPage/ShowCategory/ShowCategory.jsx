import React from 'react';
import styles from './ShowCategory.module.scss';

const ShowCategory = () => {
  return (
    <div className={styles.categoryBlock}>
      <div className={styles.container}>
        <div className={styles.categotyName}>All products</div>
      </div>
    </div>
  );
};

export default ShowCategory;
