import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Footer.module.scss';

import logoImg from '../../assets/img/Logo.svg';
import topArrow from '../../assets/img/TopArrow.svg';

const navListFooter = [
  { to: '/github', text: 'github' },
  { to: '/contacts', text: 'contacts' },
  { to: '/rights', text: 'rights' },
];

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Link to="/" className={styles.footer__logo}>
          <img src={logoImg} alt="Logo" />
        </Link>
        <nav className={styles.footer__nav}>
          <ul className={styles.footer__nav_item}>
            {navListFooter.map(({ to, text }) => (
              <li key={text}>
                <NavLink
                  to={to}
                  // eslint-disable-next-line max-len
                  className={({ isActive }) => classNames(styles.footer__nav_link, {
                    [styles.footer__nav_link_active]: isActive,
                  })}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.footer__button}>
          <label htmlFor="buttonToTop" className={styles.footer__button_label}>
            Back to top
            <Link
              to="/"
              id="buttonToTop"
              className={styles.footer__button_arrow}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src={topArrow}
                alt="Logo"
                className={styles.footer__button_icon}
              />
            </Link>
          </label>
        </div>
      </div>
    </footer>
  );
};
