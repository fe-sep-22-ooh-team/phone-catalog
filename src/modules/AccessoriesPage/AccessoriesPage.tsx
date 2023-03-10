import React from 'react';
import styles from './AccessoriesPage.module.scss';
import cartEmpty from '../../assets/img/Cart-empty.svg';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const AccessoriesPage: React.FC = () => (
  <div className="page__container">
    <Breadcrumbs location={['/', '/accessories']} />
    <div className={styles.accessories__container}>
      <h1 className="page__subtitle">There are no accessories yet</h1>
      <img src={cartEmpty} alt="CartEmpty" />
    </div>
  </div>
);
