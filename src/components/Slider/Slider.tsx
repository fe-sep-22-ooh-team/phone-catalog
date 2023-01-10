/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.scss';

import { Autoplay, Navigation, Pagination } from 'swiper';

import styles from './Slider.module.scss';
import img1 from '../../assets/img/swiper1.png';
import img2 from '../../assets/img/swiper2.jpg';
import img3 from '../../assets/img/swiper3.jpg';
import img4 from '../../assets/img/slider1.jpg';
import img5 from '../../assets/img/slider2.jpg';
import img6 from '../../assets/img/slider3.jpg';

const sliderImages = [img1, img2, img3, img4, img5, img6];

export const Slider: React.FC = () => {
  return (
    <div className={styles.container}>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className={styles.swiper}
      >
        {sliderImages.map((sliderImg) => (
          <SwiperSlide className={styles.swiper__slide}>
            <Link to="/phones" className={styles.swiper__imgBox}>
              <img src={sliderImg} alt="" className={styles.swiper__img} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
