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
                      {currPhoneInfo?.about[0].header}
                    </h4>

                    <div className={styles.product__about_item_text}>
                      <p>
                        {currPhoneInfo?.about[1].description}
                      </p>
                    </div>
                  </article>

                  <article className={styles.product__about_item}>
                    <h4 className={styles.product__about_item_title}>
                      {currPhoneInfo?.about[1].header}
                    </h4>

                    <div className={styles.product__about_item_text}>
                      <p>
                        {currPhoneInfo?.about[1].description}
                      </p>
                    </div>
                  </article>

                  <article className={styles.product__about_item}>
                    <h4 className={styles.product__about_item_title}>
                      {currPhoneInfo?.about[2].header}
                    </h4>

                    <div className={styles.product__about_item_text}>
                      <p>
                        {currPhoneInfo?.about[2].description}
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
