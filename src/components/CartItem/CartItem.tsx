/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from './CartItem.module.scss';

import button from '../../assets/img/Delete.svg';
import minus from '../../assets/img/Minus.svg';
import plus from '../../assets/img/Plus.svg';
import minusinvis from '../../assets/img/MinusDisabled.svg';
import { PhoneWithCount } from '../../types/PhoneWithCount';
import { ContextFavCart } from '../ContextFavCart';

interface Props {
  item: PhoneWithCount;
  setTotalCost: (value: React.SetStateAction<number>) => void;
}

export const CartItem: React.FC<Props> = ({ item, setTotalCost }) => {
  const {
    name, image, discountPrice, slug,
  } = item.phone;

  const { cartList, setCartList } = useContext(ContextFavCart);
  const serverLocation = 'https://idyllic-lamington-19c8d3.netlify.app/';
  const img = serverLocation + image;
  const isVisible = item.count > 1;

  const priceToShow = item.count * +discountPrice;

  const handleAdd = () => {
    const newList = cartList.map((el) => {
      if (el.phone.slug === slug) {
        el.count += 1;
      }

      return el;
    });

    setCartList(newList);
    setTotalCost((prev) => prev + +discountPrice);
  };

  const handleRemove = () => {
    const newList = cartList.map((el) => {
      if (el.phone.slug === slug) {
        el.count -= 1;
      }

      return el;
    });

    setCartList(newList);
    setTotalCost((prev) => prev - +discountPrice);
  };

  const handleDeleteItem = () => {
    const newList = cartList.filter((el) => el.phone.slug !== slug);

    setCartList(newList);
    setTotalCost((prev) => prev - +discountPrice * item.count);
  };

  return (
    <article className={styles.cartItem}>
      <div className={styles.cartItem__content}>
        <div className={styles.cartItem__info}>
          <button
            type="button"
            className={styles.cartItem__info_btn}
            onClick={handleDeleteItem}
          >
            <img src={button} alt="button delete" />
          </button>

          <img className={styles.cartItem__image} src={img} alt="PhoneName" />

          <h3 className={styles.cartItem__title}>{name}</h3>
        </div>

        <div className={styles.cartItem__wrapper}>
          <div className={styles.cartItem__counter}>
            <button
              type="button"
              className={classNames(styles.cartItem__button, {
                [styles.cartItem__button_disabled]: !isVisible,
              })}
              onClick={handleRemove}
              disabled={!isVisible}
            >
              {isVisible
                ? <img src={minus} alt="Minus button" />
                : (
                  <img
                    className={styles.cartItem__button_img}
                    src={minusinvis}
                    alt="Minus light button"
                  />
                )}
            </button>

            <p>{item.count}</p>

            <button
              type="button"
              className={styles.cartItem__button}
              onClick={handleAdd}
            >
              <img src={plus} alt="Plus button" />
            </button>
          </div>

          <div className={styles.cartItem__price}>{`$${priceToShow}`}</div>
        </div>
      </div>
    </article>
  );
};
