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
  const [isLoadingNew, setIsLoadingNew] = useState(false);
  const [isLoadingDiscounted, setIsLoadingDiscounted] = useState(false);

  const loadNewPhones = useCallback(async () => {
    try {
      setIsLoadingNew(true);

      const newGoods = await getNew();

      setNewPhones(await newGoods);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      setIsLoadingNew(false);
    }
  }, [newPhones]);

  const loadNewDiscounted = useCallback(async () => {
    try {
      setIsLoadingDiscounted(true);
      const discountedGoods = await getDiscounted();

      setDiscountedPhones(await discountedGoods);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      setIsLoadingDiscounted(false);
    }
  }, [discountedPhones]);

  useEffect(() => {
    loadNewPhones();
    loadNewDiscounted();
  }, []);

  return (
    <div className={styles.homePage__container}>
      <h1 className="page__title">Welcome to Nice Gadgets store!</h1>
      <Slider />
      <Featured
        phones={newPhones}
        isLoading={isLoadingNew}
        title="Brand new models"
      />
      <Categories categories={categoriesFromServer} />
      <Featured
        phones={discountedPhones}
        isLoading={isLoadingDiscounted}
        title="Hot prices"
      />
    </div>
  );
};
