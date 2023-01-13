import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper';
import styles from './styles.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/scss/thumbs';

const BASE_URL = 'https://stately-meerkat-f84066.netlify.app';

type Props = {
  images: string[] | undefined;
};

export const PhoneInfoSlider: React.FC<Props> = ({ images }) => {
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
              src={`${BASE_URL}/${image}`}
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
        slidesPerView={4}
      >
        {images?.map((image) => (
          <SwiperSlide className={styles.product__slider_thumb}>
            <img
              src={`${BASE_URL}/${image}`}
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
