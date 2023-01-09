import React from 'react';
import styles from './AccessoriesPage.module.scss';
import cartEmpty from '../../assets/img/Cart-empty.svg';

export const AccessoriesPage: React.FC = () => (
  <div className={styles.accessories__container}>
    <h1 className="page__subtitle">There are no accessories yet</h1>
    <img src={cartEmpty} alt="CartEmpty" />
  </div>
);
