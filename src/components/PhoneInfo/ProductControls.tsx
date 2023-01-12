/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductControls.module.scss';

export const ProductControls: React.FC = () => {
  const capacityAvailable = [64, 128, 256];
  const colorsAvailable = ['black', 'yellow', 'purple'];

  return (
    <div className={styles.controls}>
      <div className={styles.controls__item}>
        <h4 className={styles.controls__title}>
          Available colors
          <span className={styles.controls__code}>ID: 802390</span>
        </h4>

        <ul className={styles.controls__params}>
          {colorsAvailable.map((currentColor: string, i) => (
            <li key={i} className={styles.controls__params_item}>
              <Link
                to="/phones/1"
                className={styles.controls__params_item_wrap}
              >
                <div
                  className={styles.controls__params_item_inner}
                > </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.controls__item}>
        <h4 className={styles.controls__title}>
          Select capacity
        </h4>

        <ul className={styles.controls__params}>
          {capacityAvailable.map((currentCatacity, i) => (
            <li
              key={i}
              className={styles.controls__params_item}
            >
              <Link
                to="/phones/1"
                className={styles.controls__params_capacity}
              >
                {currentCatacity}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
