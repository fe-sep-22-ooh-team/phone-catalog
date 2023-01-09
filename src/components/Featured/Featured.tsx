import React from 'react';

import styles from './Featured.module.scss';

type Props = {
  title: string;
};

export const Featured: React.FC<Props> = ({ title }) => (
  <div className={styles.featured}>
    <h2 className="page__subtitle">{title}</h2>
    <div className={styles.content}>
      <p>TBA</p>
    </div>
  </div>
);
