/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductControls.module.scss';

interface Props {
  colors?: string[],
  capacity?: string[],
}

export const ProductControls: React.FC<Props> = ({ colors, capacity }) => {
  return (
    <div className={styles.controls}>
      <div className={styles.controls__item}>
        <h4 className={styles.controls__title}>
          Available colors
          <span className={styles.controls__code}>ID: 80239</span>
        </h4>

        <ul className={styles.controls__params}>
          {colors?.map((currentColor: string, i) => (
            <li key={i} className={styles.controls__params_item}>
              <Link
                to="/phones/apple-iphone-14-pro-512gb-gold"
                className={styles.controls__params_item_wrap}
              >
                <div className={styles.controls__params_item_inner}> </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.controls__item}>
        <h4 className={styles.controls__title}>Select capacity</h4>

        <ul className={styles.controls__params}>
          {capacity?.map((currentCatacity, i) => (
            <li key={i} className={styles.controls__params_item}>
              <Link to="/phones/1" className={styles.controls__params_capacity}>
                {`${currentCatacity} GB`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
