import React, { useContext, useEffect, useState } from 'react';
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
  const [isActiveFav, setIsActiveFav] = useState(false);

  const serverLocation = 'https://idyllic-lamington-19c8d3.netlify.app/';
  const {
    cartList,
    setCartList,
    favList,
    setFavList,
  } = useContext(ContextFavCart);

  const indexCart = cartList.find((el) => el.phone.slug === phone.slug);
  const indexFav = favList.find((el) => el.slug === phone.slug);

  useEffect(() => {
    if (indexCart) {
      setIsActiveCart(true);
    }

    if (indexFav) {
      setIsActiveFav(true);
    }
  }, []);

  const handleAddCart = () => {
    if (!indexCart) {
      setIsActiveCart(true);
      setCartList([...cartList, { phone, count: 1 }]);
    }

    if (indexCart) {
      setIsActiveCart(false);
      setCartList(cartList.filter((el) => el.phone.slug !== phone.slug));
    }
  };

  const handleAddFav = () => {
    if (!indexFav) {
      setIsActiveFav(true);
      setFavList([...favList, phone]);
    }

    if (indexFav) {
      setIsActiveFav(false);
      setFavList(favList.filter((el) => el.slug !== phone.slug));
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
          {phone.price && `$${phone.price}`}
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
            <Favorite onClick={handleAddFav} isActiveFav={isActiveFav} />
          </div>
        </div>
      </footer>
    </article>
  );
};
