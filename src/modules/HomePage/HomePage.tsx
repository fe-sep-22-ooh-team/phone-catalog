import React, { useCallback, useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { Featured } from '../../components/Featured';
import { Slider } from '../../components/Slider';
import { Categories } from '../../components/Categories';
import categoriesFromServer from '../../api/categories.json';
import { getNew, getDiscounted } from '../../api/goods';
import { Phone } from '../../types/Phone';

export const HomePage: React.FC = () => {
  const [newPhones, setNewPhones] = useState<Phone[]>([]);
  const [discountedPhones, setDiscountedPhones] = useState<Phone[]>([]);
  // const [isLoading, setIsLoading] = useState(false);

  const loadGoods = useCallback(async () => {
    try {
      // setIsLoading(true);

      const newGoods = await getNew();
      const discountedGoods = await getDiscounted();

      setNewPhones(await newGoods);
      setDiscountedPhones(await discountedGoods);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      // setIsLoading(false);
    }
  }, [newPhones, discountedPhones]);

  useEffect(() => {
    loadGoods();
  }, [newPhones, discountedPhones]);

  return (
    <div className={styles.homePage__container}>
      <h1 className="page__title">Welcome to Nice Gadgets store!</h1>
      <Slider />
      <Featured phones={newPhones} title="Brand new models" />
      <Categories categories={categoriesFromServer} />
      <Featured phones={discountedPhones} title="Hot prices" />
    </div>
  );
};
