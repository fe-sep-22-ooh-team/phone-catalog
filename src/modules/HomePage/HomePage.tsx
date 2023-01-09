import { Slider } from '../../components/PicturesSlider';
import { Featured } from '../../components/Featured';
import { Categories } from '../../components/Categories';

import styles from './HomePage.module.scss';

export const HomePage: React.FC = () => (
  <div className={styles.homePage__container}>
    <div className="grid">
      <div className="grid__item--tablet--1-9 grid__item--desktop--1-24">
        <h1 className="page__title">Welcome to Nice Gadgets store!</h1>
      </div>

      <div className="grid__item--tablet--1-12 grid__item--desktop--1-24">
        <Slider />
      </div>

      <div className="grid__item--tablet--1-12 grid__item--desktop--1-24">
        <Featured />
      </div>

      <Categories />

      <div className="grid__item--tablet--1-12 grid__item--desktop--1-24">
        <Featured />
      </div>
    </div>
  </div>
);
