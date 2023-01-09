/* eslint-disable react/button-has-type */
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';

import logoImg from '../../assets/img/Logo.svg';
import favouritesImg from '../../assets/img/Favourites.svg';
import shoppingBagImg from '../../assets/img/ShoppingBag.svg';

const navLinks = [
  { to: '/', text: 'home' },
  { to: '/phones', text: 'phones' },
  { to: '/tablets', text: 'tablets' },
  { to: '/accessories', text: 'accessories' },
];

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);

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
            {/* impossible to use '-' between menu and item */}
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
                    })
                  // eslint-disable-next-line react/jsx-curly-newline
                  }
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
              className={styles.nav__cart_item}
              onClick={onCloseMenu}
            >
              <img
                src={favouritesImg}
                alt="favorites"
                className={styles.cart__cart_item_img}
              />
            </NavLink>

            <NavLink // need to create a context to get current value of favourite items
              to="/cart"
              className={styles.nav__cart_item}
              onClick={onCloseMenu}
            >
              <img src={shoppingBagImg} alt="cart" />
              <span className={styles.nav__cart_item_idis}>5</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
