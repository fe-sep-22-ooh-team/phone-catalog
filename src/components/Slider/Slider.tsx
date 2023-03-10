/* eslint-disable react/jsx-boolean-value */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.scss';
import 'swiper/css/effect-creative';

import {
  Autoplay, Navigation, Pagination, EffectCreative,
} from 'swiper';

import styles from './Slider.module.scss';
import img1 from '../../assets/img/swiper1.jpg';
import img2 from '../../assets/img/swiper2.jpg';
import img3 from '../../assets/img/swiper3.jpg';
import img4 from '../../assets/img/swiper4.jpg';
import img5 from '../../assets/img/swiper5.jpg';
import img6 from '../../assets/img/swiper6.jpg';

import mobimg1 from '../../assets/img/slider-mobile-00.png';
import mobimg2 from '../../assets/img/slider-mobile-01.png';
import mobimg3 from '../../assets/img/slider-mobile-02.png';
import mobimg4 from '../../assets/img/slider-mobile-03.png';
import mobimg5 from '../../assets/img/slider-mobile-04.png';

let sliderImages;

export const Slider: React.FC = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, [innerWidth]);

  if (innerWidth < 640) {
    sliderImages = [mobimg1, mobimg2, mobimg3, mobimg4, mobimg5];
  } else {
    sliderImages = [img1, img2, img3, img4, img5, img6];
  }

  return (
    <div className={styles.container}>
      <div className="slider">
        <Swiper
          grabCursor={true}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, EffectCreative]}
          className={styles.swiper}
        >
          {sliderImages.map((sliderImg) => (
            <SwiperSlide className={styles.swiper__slide} key={sliderImg}>
              <Link to="/phones" className={styles.swiper__imgBox}>
                <img
                  src={sliderImg}
                  alt="phone"
                  className={styles.swiper__img}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
