import React from 'react';

import { Category } from '../../types/Category';

import styles from './CategoryCard.module.scss';

type Props = {
  category: Category;
};

export const CategoryCard: React.FC<Props> = ({ category }) => {
  const {
    title,
    count,
    imgUrl,
  } = category;

  return (
    <div className={styles.card}>
      <div>
        <img src={imgUrl} alt={title} className={styles.card__img} />
      </div>

      <p className={styles.card__title}>{title}</p>
      <p className={styles.card__count}>{count}</p>
    </div>
  );
};
