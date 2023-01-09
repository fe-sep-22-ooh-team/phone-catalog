import React from 'react';

import styles from './Featured.module.scss';

type Props = {
  title: string;
};

export const Featured: React.FC<Props> = ({ title }) => (
  <div className={styles.featured}>
    <h2 className={styles.featured__title}>{title}</h2>

    <p>TBA</p>
  </div>
);
