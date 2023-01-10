/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './PicturesSlider.module.scss';

import img1 from '../../assets/img/swiper1.png';
import img2 from '../../assets/img/swiper2.jpg';
import img3 from '../../assets/img/swiper3.jpg';

const sliderImages = [img1, img2, img3];

export const PicturesSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imagesCount = sliderImages.length;
  const dots = sliderImages.map((el, i) => i);

  const updateActiveIndex = (newIndex: number) => {
    let index = newIndex;

    if (index < 0) {
      index = imagesCount - 1;
    } else if (index > imagesCount - 1) {
      index = 0;
    }

    setActiveIndex(index);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateActiveIndex(activeIndex + 1);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [activeIndex]);

  return (
    <div className={styles.slider}>
      <div className={styles.slider__swiper}>
        <button
          type="button"
          className={`${styles.slider__button} ${styles.slider__button_prev}`}
          onClick={() => updateActiveIndex(activeIndex - 1)}
        />

        <div className={styles.slider__image}>
          <Link to="/phones" className={styles.slider__image_link}>
            <img
              className={styles.slider__image_item}
              src={sliderImages[activeIndex]}
              alt="phones"
            />
          </Link>
        </div>

        <button
          type="button"
          className={`${styles.slider__button} ${styles.slider__button_next}`}
          onClick={() => updateActiveIndex(activeIndex + 1)}
        />
      </div>

      <div className={styles.slider__dots}>
        {dots.map((dot) => (
          <button
            key={dot}
            type="button"
            className={classNames(styles.slider__dot, {
              [styles.slider__dot_active]: dot === activeIndex,
            })}
            onClick={() => setActiveIndex(dot)}
          />
        ))}
      </div>
    </div>
  );
};
