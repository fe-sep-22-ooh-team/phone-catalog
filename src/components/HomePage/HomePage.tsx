import { Slider } from '../Slider';
import { Featured } from '../Featured';
import { Categories } from '../Categories';

import styles from './HomePage.module.scss';

import categoriesFromServer from '../../api/categories.json';

export const HomePage: React.FC = () => (
  <>
    <div className="grid__item--tablet--1-9 grid__item--desktop--1-17">
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
    </div>

    <div className="grid__item--tablet--1-12 grid__item--desktop--1-24">
      <Slider />
    </div>

    <div className="grid__item--tablet--1-12 grid__item--desktop--1-24">
      <Featured title="Brand new models" />
    </div>

    <div className="grid__item--tablet--1-12 grid__item--desktop--1-24">
      <Categories categories={categoriesFromServer} />
    </div>

    <div className="grid__item--tablet--1-12 grid__item--desktop--1-24">
      <Featured title="Hot prices" />
    </div>
  </>
);
