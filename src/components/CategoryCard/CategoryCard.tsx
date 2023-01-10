import React from 'react';
import { Link } from 'react-router-dom';

import { Category } from '../../types/Category';

import styles from './CategoryCard.module.scss';

type Props = {
  category: Category;
};

export const CategoryCard: React.FC<Props> = ({ category }) => {
  const {
    title,
    count,
    url,
    imgUrl,
  } = category;

  return (
    <div className={styles.card}>
      <div className={styles.card__container}>
        <Link to={url} className={styles.card__cover}>
          <img src={imgUrl} alt={title} className={styles.card__img} />
        </Link>
      </div>

      <Link to={url} className={styles.card__link}>
        <p className={styles.card__title}>{title}</p>
      </Link>

      <p className={styles.card__count}>{count}</p>
    </div>
  );
};
