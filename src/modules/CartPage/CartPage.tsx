import { useContext, useState } from 'react';
import styles from './CartPage.module.scss';

import { ContextFavCart } from '../../components/ContextFavCart';
import { CartItem } from '../../components/CartItem';
import { EmptyCart } from '../../components/EmptyCart';
import { ToBackButton } from '../../components/ToBackButton';
import { ModalWindow } from '../../components/ModalWindow';

export const CartPage: React.FC = () => {
  const { cartList } = useContext(ContextFavCart);
  const [isOpen, setIsOpen] = useState(false);
  const [totalCost, setTotalCost] = useState(
    cartList.reduce(
      (acc, item) => acc + +item.phone.discountPrice * +item.count,
      0,
    ),
  );

  const totalAmount = cartList.reduce((acc, el) => acc + el.count, 0);

  const handleCheckout = () => {
    setIsOpen(true);
  };

  return (
    <div className="page__container">
      <div className={styles.cart__container}>
        <div className={styles.cart__button}>
          <ToBackButton />
        </div>
        {cartList.length > 0 ? (
          <>
            <h1 className={styles.cart__title}>Cart</h1>
            <div className="grid">
              <div
                className="
                  grid__item--mobile--1-4
                  grid__item--tablet--1-12
                  grid__item--desktop--1-16"
              >
                {cartList.map((item) => (
                  <CartItem
                    key={item.phone.slug}
                    item={item}
                    setTotalCost={setTotalCost}
                  />
                ))}
              </div>

              <div
                className="
                  grid__item--mobile--1-4
                  grid__item--tablet--1-12
                  grid__item--desktop--17-24"
              >
                <div className={styles.cart__total}>
                  <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen} />
                  <div className={styles.cart__total_cost}>
                    <p className={styles.cart__total_price}>
                      {`$${totalCost}`}
                    </p>
                    <p className={styles.cart__total_text}>
                      {`Total for ${totalAmount} items`}
                    </p>
                  </div>

                  <div className={styles.cart__total_btn}>
                    <button
                      type="button"
                      onClick={handleCheckout}
                      className={styles.cart__total_button}
                    >
                      Checkout
                    </button>
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
