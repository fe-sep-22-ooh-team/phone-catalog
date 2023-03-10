import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Footer.module.scss';

import logoImg from '../../assets/img/Logo.svg';

const navListFooter = [
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
            <a
              href="https://github.com/fe-sep-22-ooh-team"
              className={styles.footer__nav_link}
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            {navListFooter.map(({ to, text }) => (
              <li key={text}>
                <NavLink
                  to={to}
                  // eslint-disable-next-line max-len
                  className={
                    ({ isActive }) =>
                      // eslint-disable-next-line implicit-arrow-linebreak
                      classNames(styles.footer__nav_link, {
                        [styles.footer__nav_link_active]: isActive,
                      })
                    // eslint-disable-next-line react/jsx-curly-newline
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <label className={styles.footer__button}>
          Back to top
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            type="button"
            className={styles.footer__button_arrow}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </label>
      </div>
    </footer>
  );
};
