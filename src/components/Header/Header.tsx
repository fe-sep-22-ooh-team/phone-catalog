/* eslint-disable react/button-has-type */
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.scss';

import logoImg from '../../assets/img/Logo.svg';
import favouritesImg from '../../assets/img/Favourites.svg';
import shoppingBagImg from '../../assets/img/ShoppingBag.svg';
import { ContextFavCart } from '../ContextFavCart';

const navLinks = [
  { to: '/', text: 'home' },
  { to: '/phones', text: 'phones' },
  { to: '/tablets', text: 'tablets' },
  { to: '/accessories', text: 'accessories' },
];

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const { cartList, favList } = useContext(ContextFavCart);

  const totalCartCount = cartList.reduce((acc, item) => acc + item.count, 0);

  const totalFavCount = favList.length;

  const onCloseMenu = () => {
    setActiveMenu(false);
    document.body.style.overflow = '';
  };

  const onOpenMenu = () => {
    setActiveMenu((active) => !active);
    document.body.style.overflow = 'hidden';

    if (activeMenu) {
      document.body.style.overflow = '';
    }
  };

  return (
    <header>
      <nav className={styles.nav}>
        <NavLink to="/" onClick={onCloseMenu}>
          <img src={logoImg} alt="Logo" className={styles.nav__logo} />
        </NavLink>

        <button
          className={classNames(styles.nav__menu, {
            [styles.nav__menu_active]: activeMenu,
          })}
          onClick={onOpenMenu}
        >
          <div className={styles.nav__menu_wrap}>
            <span className={styles.nav__menu_item} />
          </div>
        </button>

        <div
          className={classNames(styles.nav__wrapper, {
            [styles.nav__wrapper_active]: activeMenu,
          })}
        >
          <ul className={styles.nav__list}>
            {navLinks.map(({ to, text }) => (
              <li key={text} className={styles.nav__item}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    // eslint-disable-next-line implicit-arrow-linebreak
                    classNames(styles.nav__link, {
                      [styles.nav__link_active]: isActive,
                    })}
                  onClick={onCloseMenu}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={styles.nav__cart}>
            <NavLink
              to="/favorites"
              onClick={onCloseMenu}
              className={({ isActive }) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                classNames(styles.nav__cart_item, {
                  [styles.nav__link_active]: isActive,
                })}
            >
              <img
                src={favouritesImg}
                alt="favorites"
                className={styles.cart__cart_item_img}
              />
              {totalFavCount > 0 && (
                <span className={styles.nav__cart_item_idis}>
                  {totalFavCount}
                </span>
              )}
            </NavLink>

            <NavLink // need to create a context to get current value of favourite items
              to="/cart"
              onClick={onCloseMenu}
              className={({ isActive }) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                classNames(styles.nav__cart_item, {
                  [styles.nav__link_active]: isActive,
                })}
            >
              <img src={shoppingBagImg} alt="cart" />
              {totalCartCount > 0 && (
                <span className={styles.nav__cart_item_idis}>
                  {totalCartCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
