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
  const transformColor = (color: string) => {
    switch (color) {
      case 'green': return '#BCE7D4';
      case 'yellow': return '#FFE88A';
      case 'purple': return '#D4D1DC';
      case 'red': return '#970013';
      case 'midnightgreen': return '#2E3933';
      case 'spacegray': return '#302E2F';
      case 'silver': return '#E3E3DB';
      case 'gold': return '#FFD700';
      case 'black': return '#1E201F';
      case 'white': return '#F7F7F7';
      case 'coral': return '#F9614C';
      case 'starlight': return '#F8F9EC';
      case 'deep-purple': return '#570861';
      case 'space-black': return '#333334';
      case 'midnight': return '#191970';
      default: return '#fff';
    }
  };

  return (
    <div className={styles.controls}>
      <div className={styles.controls__item}>
        <h4 className={styles.controls__title}>
          Available colors
          <span className={styles.controls__code}>ID: 80239</span>
        </h4>

        <ul className={styles.controls__params}>
          {colors?.map((currentColor: string) => {
            const divStyle = { background: transformColor(currentColor) };

            return (
              <li key={currentColor} className={styles.controls__params_item}>
                <Link
                  to="/phones/apple-iphone-14-pro-512gb-gold"
                  className={styles.controls__params_item_wrap}
                >
                  <div
                    className={styles.controls__params_item_inner}
                    style={divStyle}
                  > </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.controls__item}>
        <h4 className={styles.controls__title}>Select capacity</h4>

        <ul className={styles.controls__params}>
          {capacity?.map((currentCapacity) => (
            <li key={currentCapacity} className={styles.controls__params_item}>
              <Link to="/phones/1" className={styles.controls__params_capacity}>
                {`${currentCapacity} GB`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
