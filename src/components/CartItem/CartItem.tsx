/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './CartItem.module.scss';

import button from '../../assets/img/Delete.svg';
import minus from '../../assets/img/Minus.svg';
import plus from '../../assets/img/Plus.svg';

import image from '../../assets/img/iPhoneXs64GbSilver.svg';

export const CartItem: React.FC = () => {
  return (
    <article className={styles.cartItem}>
      <div className={styles.cartItem__content}>
        <div className={styles.cartItem__info}>
          <button>
            <img src={button} alt="button delete" />
          </button>

          <img
            className={styles.cartItem__image}
            src={image}
            alt="PhoneName"
          />

          <h3 className={styles.cartItem__title}>
            Apple iPhone Xs 64GB Silver (MQ023)
          </h3>
        </div>

        <div className={styles.cartItem__wrapper}>
          <div className={styles.cartItem__counter}>
            <button
              className={styles.cartItem__button}
            >
              <img src={minus} alt="Minus button" />
            </button>
            <p>1</p>
            <button
              className={styles.cartItem__button}
            >
              <img src={plus} alt="Plus button" />
            </button>
          </div>

          <div className={styles.cartItem__price}>
            $999
          </div>
        </div>
      </div>
    </article>
  );
};
