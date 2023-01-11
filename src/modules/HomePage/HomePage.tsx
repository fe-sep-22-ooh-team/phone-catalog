import React, { useCallback, useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { Featured } from '../../components/Featured';
import { Slider } from '../../components/Slider';
import { Categories } from '../../components/Categories';
import categoriesFromServer from '../../api/categories.json';
import { getAll } from '../../api/goods';
import { Phone } from '../../types/Phone';

export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  // const [isLoading, setIsLoading] = useState(false);

  const loadGoods = useCallback(async () => {
    try {
      // setIsLoading(true);

      const allGoods = await getAll();

      setPhones(await allGoods.results);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      // setIsLoading(false);
    }
  }, [phones]);

  useEffect(() => {
    loadGoods();
  }, [phones]);

  const newModels = phones
    .slice(0, 8);
  const hotPrices = phones
    .slice(0, 8);

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
