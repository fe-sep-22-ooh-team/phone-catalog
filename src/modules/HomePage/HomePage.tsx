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

  const hotPrices = phones.filter((phone) => phone.price !== '');

  return (
    <div className={styles.homePage__container}>
      <h1 className="page__title">Welcome to Nice Gadgets store!</h1>
      <Slider />
      <Featured phones={phones} title="Brand new models" />
      <Categories categories={categoriesFromServer} />
      <Featured phones={hotPrices} title="Hot prices" />
    </div>
  );
};
