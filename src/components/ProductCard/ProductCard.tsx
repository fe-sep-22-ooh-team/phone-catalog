import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { Button } from '../Button';
import { ContextFavCart } from '../ContextFavCart';
import { Favorite } from '../Favorite';

import styles from './ProductCard.module.scss';

type Props = {
  phone: Phone;
};

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const [isActiveCart, setIsActiveCart] = useState(false);
  const serverLocation = 'https://idyllic-lamington-19c8d3.netlify.app/';
  const { cartList, setCartList } = useContext(ContextFavCart);

  const indexCart = cartList.find((el) => el.phone.slug === phone.slug);

  const handleAddCart = () => {
    if (indexCart) {
      const filteredList = cartList.filter(
        (el) => el.phone.slug !== phone.slug,
      );

      setIsActiveCart(false);
      setCartList(filteredList);
    }

    if (!indexCart) {
      setIsActiveCart(true);
      setCartList([...cartList, { phone, count: 1 }]);
    }
  };

  return (
    <article className={styles.productCard}>
      <Link to="/phones/1" className={styles.productCard__link}>
        <img
          src={serverLocation + phone.image}
          alt="appleProduct"
          className={styles.productCard__link_img}
        />
      </Link>

      <h3 className={styles.productCard__title} title={`${phone.name}`}>
        <Link to="/phones/1" className={styles.productCard__link}>
          {phone.name}
        </Link>
      </h3>

      <div className={styles.productCard__price}>
        {`$${phone.discountPrice}`}
        <span className={styles.productCard__price_oldPrice}>
          {`$${phone.price}`}
        </span>
      </div>

      <ul className={styles.productCard__specs}>
        <li className={styles.productCard__info}>
          <h6 className={styles.productCard__name}>Screen</h6>
          <strong className={styles.productCard__value}>{phone.screen}</strong>
        </li>

        <li className={styles.productCard__info}>
          <h6 className={styles.productCard__name}>Capacity</h6>

          <strong className={styles.productCard__value}>{phone.memory}</strong>
        </li>

        <li className={styles.productCard__info}>
          <h6 className={styles.productCard__name}>RAM</h6>
          <strong className={styles.productCard__value}>{phone.ram}</strong>
        </li>
      </ul>

      <footer className={styles.productCard__action}>
        <div className={styles.productCard__action}>
          <div className={styles.productCard__action__btn}>
            <Button
              text="Add to cart"
              textAfterClick="Added"
              onClick={handleAddCart}
              isActiveCart={isActiveCart}
            />
          </div>

          <div className={styles.productCard__action__favorite}>
            <Favorite />
          </div>
        </div>
      </footer>
    </article>
  );
};
