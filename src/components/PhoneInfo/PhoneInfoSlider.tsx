import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper';
import styles from './styles.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/scss/thumbs';

const images = [
  // eslint-disable-next-line max-len
  'https://www.apple.com/v/iphone/home/bj/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg',
  // eslint-disable-next-line max-len
  'https://www.apple.com/v/iphone/home/bj/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg',
  // eslint-disable-next-line max-len
  'https://www.apple.com/v/iphone/home/bj/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg',
  // eslint-disable-next-line max-len
  'https://www.apple.com/v/iphone/home/bj/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg',
  // eslint-disable-next-line max-len
  'https://www.apple.com/v/iphone/home/bj/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg',
];

export const PhoneInfoSlider: React.FC = () => {
  const [activeThumb, setActiveThumb] = useState<SwiperCore>();

  return (
    <div className={styles.gallery}>
      <Swiper
        className={styles.product__image_slider}
        modules={[Thumbs]}
        spaceBetween={32}
        slidesPerView={1}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
      >
        {images?.map((image) => (
          <SwiperSlide>
            <img
              src={image}
              alt={image}
              className={styles.product__image_img}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        watchSlidesProgress
        onSwiper={setActiveThumb}
        className={styles.product__image_slider_thumbs}
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={5}
      >
        {images?.map((image) => (
          <SwiperSlide
            className={styles.product__slider_thumb}
          >
            <img
              src={image}
              alt={image}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'contain',
              }}
            />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};