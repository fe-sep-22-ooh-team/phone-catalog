import styles from './HomePage.module.scss';
import { Featured } from '../../components/Featured';
import { PicturesSlider } from '../../components/PicturesSlider';
import { Categories } from '../../components/Categories';
import categoriesFromServer from '../../api/categories.json';
import { EmptyCart } from '../../components/EmptyCart';

export const HomePage: React.FC = () => (
  <>
    <EmptyCart />

    <div className={styles.homePage__container}>
      <div className="grid">
        <div
          className="grid__item--mobile--1-4
      grid__item--tablet--1-9 grid__item--desktop--1-24"
        >
          <h1 className="page__title">Welcome to Nice Gadgets store!</h1>
        </div>

        <div
          className="grid__item--mobile--1-4
      grid__item--tablet--1-12 grid__item--desktop--1-24"
        >
          <PicturesSlider />
        </div>

        <div
          className="grid__item--mobile--1-4
      grid__item--tablet--1-12 grid__item--desktop--1-24"
        >
          <Featured title="Brand new models" />
        </div>

        <div
          className="grid__item--mobile--1-4
      grid__item--tablet--1-12 grid__item--desktop--1-24"
        >
          <Categories categories={categoriesFromServer} />
        </div>

        <div
          className="grid__item--mobile--1-4
      grid__item--tablet--1-12 grid__item--desktop--1-24"
        >
          <Featured title="Hot prices" />
        </div>
      </div>
    </div>
  </>
);
