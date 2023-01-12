/* eslint-disable max-len */
import React from 'react';

import styles from './PhoneInfo.module.scss';
import { PhoneInfoSlider } from './PhoneInfoSlider';
import { Breadcrumbs } from '../Breadcrumbs';
import { ProductControls } from './ProductControls';
import { Button } from '../Button';
import { Favorite } from '../Favorite';

export const PhoneInfo: React.FC = () => (
  <div className="page__container">
    <div className={styles.product}>
      <Breadcrumbs location={['/', '/phones']} />

      <h1 className={styles.product__title}>Apple iPhone 11 64GB Black iMT9G2FS/A</h1>
      <div className={styles.product__info}>
        <div className={styles.product__gallery}>
          <PhoneInfoSlider />
        </div>

        <div className={styles.product__promo}>
          <ProductControls />

          <div className={styles.product__price}>
            {1199}
            <span
              className={styles.product__price_old}
            >
              {1320}
            </span>
          </div>

          <div className={styles.product__action}>
            <Button text="Add to cart" />
            <Favorite />
          </div>

          <ul className={styles.product__params}>
            <li className={styles.product__params_item}>
              <h5 className={styles.product__params_name}>Screen</h5>
              <strong className={styles.product__params_value}>
                screen
              </strong>
            </li>

            <li className={styles.product__params_item}>
              <h5 className={styles.product__params_name}>Resolution</h5>
              <strong className={styles.product__params_value}>
                resolution
              </strong>
            </li>

            <li className={styles.product__params_item}>
              <h5 className={styles.product__params_name}>Processor</h5>
              <strong className={styles.product__params_value}>
                processor
              </strong>
            </li>

            <li className={styles.product__params_item}>
              <h5 className={styles.product__params_name}>RAM</h5>
              <strong className={styles.product__params_value}>ram</strong>
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
                A transformative triple‑camera system that adds tons of capability without complexity.

                An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and
                pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be
                called Pro.

              </p>
            </div>
          </article>

          <article className={styles.product__about_item}>
            <h4 className={styles.product__about_item_title}>
              Camera
            </h4>

            <div className={styles.product__about_item_text}>
              <p>
                Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of
                iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the
                highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never
                shot with anything like it.

              </p>
            </div>
          </article>

          <article className={styles.product__about_item}>
            <h4 className={styles.product__about_item_title}>
              Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.
            </h4>

            <div className={styles.product__about_item_text}>
              <p>
                iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and
                smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and
                cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more
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
                6.5” OLED
              </strong>
            </li>

            <li className={styles.product__specs_item}>
              <h5 className={styles.product__specs_name}>Resolution</h5>
              <strong className={styles.product__specs_value}>
                2688x1242
              </strong>
            </li>

            <li className={styles.product__specs_item}>
              <h5 className={styles.product__specs_name}>Processor</h5>
              <strong className={styles.product__specs_value}>
                Apple A12 Bionic
              </strong>
            </li>

            <li className={styles.product__specs_item}>
              <h5 className={styles.product__specs_name}>RAM</h5>
              <strong className={styles.product__specs_value}>3 GB</strong>
            </li>

            <li className={styles.product__specs_item}>
              <h5 className={styles.product__specs_name}>Built in memory</h5>
              <strong className={styles.product__specs_value}>
                64 GB
              </strong>
            </li>

            <li className={styles.product__specs_item}>
              <h5 className={styles.product__specs_name}>Camera</h5>
              <strong className={styles.product__specs_value}>
                12 Mp + 12 Mp + 12 Mp (Triple)
              </strong>
            </li>

            <li className={styles.product__specs_item}>
              <h5 className={styles.product__specs_name}>Zoom</h5>
              <strong className={styles.product__specs_value}>Optical, 2x</strong>
            </li>

            <li className={styles.product__specs_item}>
              <h5 className={styles.product__specs_name}>Cell</h5>
              <strong className={styles.product__specs_value}>
                GSM, LTE, UMTS
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

);
