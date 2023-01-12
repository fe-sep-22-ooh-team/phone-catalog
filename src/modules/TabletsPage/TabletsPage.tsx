import React from 'react';
import styles from './TabletsPage.module.scss';
import cartEmpty from '../../assets/img/Cart-empty.svg';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const TabletsPage: React.FC = () => (
  <div className="page__container">
    <Breadcrumbs location={['/', '/tablets']} />
    <div className={styles.tablets__container}>
      <h1 className="page__subtitle">There are no tablets yet</h1>
      <img src={cartEmpty} alt="CartEmpty" />
    </div>
  </div>
);
