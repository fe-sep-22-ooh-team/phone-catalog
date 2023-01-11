/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import { ProductCard } from '../ProductCard';

import { Phone } from '../../types/Phone';

// import styles from './Featured.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import './Featured.scss';

type Props = {
  title: string;
  phones: Phone[];
};

export const Featured: React.FC<Props> = ({ title, phones }) => {
  return (
    <>
      <h2 className="page__subtitle">{title}</h2>
      <div className="container1">
        <Swiper
          slidesPerView={"auto"}
          navigation={true}
          // loop={true}
          // loopedSlides={8}
          spaceBetween={16}
          autoplay={{
            delay: 500000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
        >
          {phones.map((phone) => (
            <SwiperSlide>
              <ProductCard key={phone.slug} phone={phone} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  );
};
