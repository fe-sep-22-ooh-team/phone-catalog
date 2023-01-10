import styles from './HomePage.module.scss';
import { Featured } from '../../components/Featured';
import { Slider } from '../../components/Slider';
import { Categories } from '../../components/Categories';
import categoriesFromServer from '../../api/categories.json';
import phonesFromServer from '../../api/phones.json';

export const HomePage: React.FC = () => {
  const newModels = phonesFromServer
    .filter((phone) => phone.year === '2022')
    .slice(0, 8);
  const hotPrices = phonesFromServer
    .filter((phone) => phone.discountPrice !== phone.price)
    .slice(0, 4);

  return (
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
          <Slider />
        </div>

        <div
          className="grid__item--mobile--1-4
        grid__item--tablet--1-12 grid__item--desktop--1-24"
        >
          <Featured phones={newModels} title="Brand new models" />
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
          <Featured phones={hotPrices} title="Hot prices" />
        </div>
      </div>
    </div>
  );
};
