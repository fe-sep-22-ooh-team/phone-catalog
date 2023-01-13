/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';

import styles from './PhoneInfo.module.scss';
import { PhoneInfoSlider } from './PhoneInfoSlider';
import { Breadcrumbs } from '../Breadcrumbs';
import { ProductControls } from './ProductControls';
import { Button } from '../Button';
import { Featured } from '../Featured';
import { ToBackButton } from '../ToBackButton';
import { getById } from '../../api/goods';
import { Favorite } from '../Favorite';
import { Phone } from '../../types/Phone';
import { RarePhone } from '../../types/RareDataPhone';
import { ContextFavCart } from '../ContextFavCart';
import { Loader } from '../Loader';

interface Props {
  phoneId: string;
}

export const PhoneInfo: React.FC<Props> = ({ phoneId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currPhoneInfo, setCurrPhoneInfo] = useState<RarePhone>();
  const [recommendedPhones, setRecommendedPhones] = useState<Phone[]>();

  const { currentId, setCurrentId } = useContext(ContextFavCart);

  setCurrentId(phoneId);

  const loadPhone = async () => {
    try {
      setIsLoading(true);
      const response = await getById(currentId);

      setCurrPhoneInfo(await response.phoneInfo);
      setRecommendedPhones(await response.phones);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  let phone: any = {};

  if (currPhoneInfo) {
    const {
      slug,
      name,
      price,
      discountPrice,
      year,
      image,
    } = currPhoneInfo;

    phone = {
      slug,
      name,
      price,
      discountPrice,
      year,
      screen: currPhoneInfo.specs.screen,
      memory: currPhoneInfo.specs.memory,
      ram: currPhoneInfo.specs.ram,
      image,
    };
  }

  useEffect(() => {
    loadPhone();
  }, [currentId]);

  return (
    <div className="page__container">
      <div className={styles.product}>

        {isLoading
          ? <Loader />
          : (
            <>
              <Breadcrumbs location={['/', '/phones', `/${currPhoneInfo?.name}`]} />
              <div className={styles.product__back}>
                <ToBackButton />
              </div>
              <h1 className={styles.product__title}>
                {currPhoneInfo?.name}
                {' '}
                iMT9G2FS/A
              </h1>
              <div className={styles.product__info}>
                <div className={styles.product__gallery}>
                  <PhoneInfoSlider
                    images={currPhoneInfo?.additionalImages}
                  />
                </div>

                <div className={styles.product__promo}>
                  <ProductControls
                    colors={currPhoneInfo?.colorsAvailable}
                    capacity={currPhoneInfo?.capacityAvailable}
                    phoneId={currentId}
                    setCurrentId={setCurrentId}
                  />
                  <div className={styles.product__price}>
                    {currPhoneInfo?.discountPrice
                      ? (`$${currPhoneInfo?.discountPrice}`)
                      : ('')}
                    <span className={styles.product__price_old}>
                      {currPhoneInfo?.price
                        ? (`$${currPhoneInfo?.price}`)
                        : ('')}
                    </span>
                  </div>

                  <div className={styles.product__action}>
                    <Button text="Add to cart" phone={currPhoneInfo} />
                    <Favorite phone={phone} />
                  </div>

                  <ul className={styles.product__params}>
                    <li className={styles.product__params_item}>
                      <h5 className={styles.product__params_name}>Screen</h5>
                      <strong className={styles.product__params_value}>{currPhoneInfo?.specs.screen}</strong>
                    </li>

                    <li className={styles.product__params_item}>
                      <h5 className={styles.product__params_name}>Resolution</h5>
                      <strong className={styles.product__params_value}>
                        {currPhoneInfo?.specs.resolution}
                      </strong>
                    </li>

                    <li className={styles.product__params_item}>
                      <h5 className={styles.product__params_name}>Processor</h5>
                      <strong className={styles.product__params_value}>
                        {currPhoneInfo?.specs.processor}
                      </strong>
                    </li>

                    <li className={styles.product__params_item}>
                      <h5 className={styles.product__params_name}>RAM</h5>
                      <strong className={styles.product__params_value}>{currPhoneInfo?.specs.ram}</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.product__about}>
                <div className={styles.product__description}>
                  <h2 className={styles.product__about_title}>About</h2>
                  <article className={styles.product__about_item}>
                    <h4 className={styles.product__about_item_title}>
                      And then there was Pro
                    </h4>

                    <div className={styles.product__about_item_text}>
                      <p>
                        A transformative triple‑camera system that adds tons of
                        capability without complexity. An unprecedented leap in
                        battery life. And a mind‑blowing chip that doubles down on
                        machine learning and pushes the boundaries of what a
                        smartphone can do. Welcome to the first iPhone powerful enough
                        to be called Pro.
                      </p>
                    </div>
                  </article>

                  <article className={styles.product__about_item}>
                    <h4 className={styles.product__about_item_title}>Camera</h4>

                    <div className={styles.product__about_item_text}>
                      <p>
                        Meet the first triple‑camera system to combine cutting‑edge
                        technology with the legendary simplicity of iPhone. Capture up
                        to four times more scene. Get beautiful images in drastically
                        lower light. Shoot the highest‑quality video in a smartphone —
                        then edit with the same tools you love for photos. You’ve
                        never shot with anything like it.
                      </p>
                    </div>
                  </article>

                  <article className={styles.product__about_item}>
                    <h4 className={styles.product__about_item_title}>
                      Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
                      Love it.
                    </h4>

                    <div className={styles.product__about_item_text}>
                      <p>
                        iPhone 11 Pro lets you capture videos that are beautifully
                        true to life, with greater detail and smoother motion. Epic
                        processing power means it can shoot 4K video with extended
                        dynamic range and cinematic video stabilization — all at 60
                        fps. You get more creative control, too, with four times more
                        scene and powerful new editing tools to play with.
                      </p>
                    </div>
                  </article>
                </div>

                <div className={styles.product__specs}>
                  <h2 className={styles.product__about_title}>Tech specs</h2>

                  <ul className={styles.product__specs_list}>
                    <li className={styles.product__specs_item}>
                      <h5 className={styles.product__specs_name}>Screen</h5>
                      <strong className={styles.product__specs_value}>
                        {currPhoneInfo?.specs.screen}
                      </strong>
                    </li>

                    <li className={styles.product__specs_item}>
                      <h5 className={styles.product__specs_name}>Resolution</h5>
                      <strong className={styles.product__specs_value}>
                        {currPhoneInfo?.specs.resolution}
                      </strong>
                    </li>

                    <li className={styles.product__specs_item}>
                      <h5 className={styles.product__specs_name}>Processor</h5>
                      <strong className={styles.product__specs_value}>
                        {currPhoneInfo?.specs.processor}
                      </strong>
                    </li>

                    <li className={styles.product__specs_item}>
                      <h5 className={styles.product__specs_name}>RAM</h5>
                      <strong className={styles.product__specs_value}>{currPhoneInfo?.specs.ram}</strong>
                    </li>

                    <li className={styles.product__specs_item}>
                      <h5 className={styles.product__specs_name}>Built in memory</h5>
                      <strong className={styles.product__specs_value}>{currPhoneInfo?.specs.memory}</strong>
                    </li>

                    <li className={styles.product__specs_item}>
                      <h5 className={styles.product__specs_name}>Camera</h5>
                      <strong className={styles.product__specs_value}>
                        {currPhoneInfo?.specs.camera}
                      </strong>
                    </li>

                    <li className={styles.product__specs_item}>
                      <h5 className={styles.product__specs_name}>Zoom</h5>
                      <strong className={styles.product__specs_value}>
                        {currPhoneInfo?.specs.zoom}
                      </strong>
                    </li>

                    <li className={styles.product__specs_item}>
                      <h5 className={styles.product__specs_name}>Cell</h5>
                      <strong className={styles.product__specs_value}>
                        {currPhoneInfo?.specs.cell}
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>

              <Featured phones={recommendedPhones} title="You may also like" />
            </>
          )}
      </div>
    </div>
  );
};
