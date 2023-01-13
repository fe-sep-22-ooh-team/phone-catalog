/* eslint-disable react/button-has-type */
import React, { useContext, useEffect, useState } from 'react';

import classnames from 'classnames';
import styles from './Button.module.scss';
import { ContextFavCart } from '../ContextFavCart';

type Props = {
  text: string;
  phone?: any,
  textAfterClick?: string;
};

export const Button: React.FC<Props> = ({
  text,
  phone,
  textAfterClick,
}) => {
  const { cartList, setCartList } = useContext(ContextFavCart);
  const [isActiveCart, setIsActiveCart] = useState(false);
  const isSelected = isActiveCart ? textAfterClick : text;
  const textToRender = textAfterClick ? isSelected : text;

  const indexCart = cartList.find((el) => el.phone?.slug === phone?.slug);

  useEffect(() => {
    if (indexCart && phone) {
      setIsActiveCart(true);
    }
  }, []);

  const handleAddCart = () => {
    if (!indexCart && phone) {
      setIsActiveCart(true);
      setCartList([...cartList, { phone, count: 1 }]);
    }

    if (indexCart && phone) {
      setIsActiveCart(false);
      setCartList(cartList.filter((el) => el.phone?.slug !== phone?.slug));
    }
  };

  return (
    <button
      onClick={handleAddCart}
      className={classnames(styles.btn, {
        [styles.btn_selected]: isActiveCart,
      })}
    >
      {textToRender}
    </button>
  );
};
