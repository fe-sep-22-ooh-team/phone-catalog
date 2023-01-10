import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { Button } from '../Button';
import { Favorite } from '../Favorite';

import styles from './ProductCard.module.scss';
// import iPhoneXs64GbSilver from '../../assets/img/iPhoneXs64GbSilver.svg';

type Props = {
  phone: Phone;
};

export const ProductCard: React.FC<Props> = ({ phone }) => {
  return (
    <article className={styles.productCard}>
      <Link to="/phones/1" className={styles.productCard__link}>
        <img
          src={phone.image}
          alt="appleProduct"
          className={styles.productCard__link_img}
        />
      </Link>

      <h3
        className={styles.productCard__title}
        title="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
      >
        <Link to="/phones/1" className={styles.productCard__link}>
          Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </Link>
      </h3>

      <div className={styles.productCard__price}>
        {phone.fullPrice}
        <span className={styles.productCard__price_oldPrice}>
          {phone.price}
        </span>
      </div>

      <ul className={styles.productCard__specs}>
        <li className={styles.productCard__info}>
          <h6 className={styles.productCard__name}>Screen</h6>
          <strong className={styles.productCard__value}>{phone.screen}</strong>
        </li>

        <li className={styles.productCard__info}>
          <h6 className={styles.productCard__name}>Capacity</h6>
          <strong className={styles.productCard__value}>{phone.ram}</strong>
        </li>

        <li className={styles.productCard__info}>
          <h6 className={styles.productCard__name}>RAM</h6>
          <strong className={styles.productCard__value}>4 GB</strong>
        </li>
      </ul>

      <footer className={styles.productCard__action}>
        <div className={styles.productCard__action}>
          <div className={styles.productCard__action__btn}>
            <Button />
          </div>

          <div className={styles.productCard__action__favorite}>
            <Favorite />
          </div>
        </div>
      </footer>
    </article>
  );
};
