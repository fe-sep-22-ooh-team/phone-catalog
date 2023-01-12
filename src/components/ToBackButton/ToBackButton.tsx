/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */

import styles from './ToBackButton.module.scss';

import LeftArrow from '../../assets/img/LeftArrowHover.svg';

export const ToBackButton: React.FC = () => (
  <div className={styles.button}>
    <img src={LeftArrow} alt="left arrow" />
    <a
      className={styles.button_link}
      onClick={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        history.back();
      }}
    >
      Back
    </a>
  </div>
);
