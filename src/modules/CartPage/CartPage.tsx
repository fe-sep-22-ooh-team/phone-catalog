import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CartPage.module.scss';

import { ContextFavCart } from '../../components/ContextFavCart';
import { CartItem } from '../../components/CartItem';
import { EmptyCart } from '../../components/EmptyCart';
import { Button } from '../../components/Button';

import LeftArrow from '../../assets/img/LeftArrowHover.svg';

export const CartPage: React.FC = () => {
  const { cartList } = useContext(ContextFavCart);
  const [totalCost, setTotalCost] = useState(cartList
    .reduce((acc, item) => (
      acc + (+item.phone.discountPrice * +item.count)
    ), 0));

  const totalAmount = cartList.reduce((acc, el) => acc + el.count, 0);

  return (
    <div className="page__container">
      <div className={styles.cart__container}>
        <div className={styles.cart__back}>
          <img
            src={LeftArrow}
            alt="left arrow"
            className={styles.cart__back_img}
          />
          <Link to="/" className={styles.cart__back_link}>
            Back
          </Link>
        </div>
        {cartList.length > 0
          ? (
            <>
              <h1 className={styles.cart__title}>Cart</h1>
              <div className="grid">
                <div className="
                  grid__item--mobile--1-4
                  grid__item--tablet--1-12
                  grid__item--desktop--1-16"
                >
                  <div>
                    {cartList.map(item => (
                      <CartItem
                        key={item.phone.slug}
                        item={item}
                        setTotalCost={setTotalCost}
                      />
                    ))}
                  </div>
                </div>

                <div className="
                  grid__item--mobile--1-4
                  grid__item--tablet--1-12
                  grid__item--desktop--17-24"
                >
                  <div className={styles.cart__total}>
                    <div className={styles.cart__total_cost}>
                      <p className={styles.cart__total_price}>{`$${totalCost}`}</p>
                      <p className={styles.cart__total_text}>{`Total for ${totalAmount} items`}</p>
                    </div>

                    <div className={styles.cart__total_btn}>
                      <Button text="Checkout" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className={styles.cart__title}>Cart</h1>
              <EmptyCart />
            </>
          )}
      </div>
    </div>
  );
};
