import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';
import errorPage from '../../assets/img/404-page.svg';
import { Button } from '../../components/Button';

export const NotFoundPage: React.FC = () => (
  <div className={styles.tablets__container}>
    <img
      src={errorPage}
      alt="errorPage"
      className={styles.tablets__container_img}
    />
    <p className={styles.tablets__container_text}>
      Ooops...Something went wrong
      <br />
      Hi, Siri!
    </p>

    <NavLink to="/">
      {/* <button type="button" className={styles.tablets__container_button}>
        Take me home
      </button> */}
      <Button text="Take me home" />
    </NavLink>
  </div>
);
