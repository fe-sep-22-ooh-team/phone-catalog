import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';
import errorPage from '../../assets/img/404-page.svg';
import { Button } from '../../components/Button';

export const NotFoundPage: React.FC = () => {
  return (
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
        <Button text="Take me home" />
      </NavLink>
    </div>
  );
};
