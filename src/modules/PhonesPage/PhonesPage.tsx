/* eslint-disable no-console */
import React, { useCallback, useState, useEffect } from 'react';
import Select from 'react-select';
import styles from './PhonesPage.module.scss';
import './select__count.scss';

import { Pagination } from '../../components/Pagination';
import { ProductCard } from '../../components/ProductCard';
import { Loader } from '../../components/Loader';
import { Breadcrumbs } from '../../components/Breadcrumbs';

import {
  getAll,
  getPhones,
} from '../../api/goods';
import { Phone } from '../../types/Phone';
import { optionsSortBy } from '../../utils/selectOptions';

export const PhonesPage: React.FC = () => {
  const [perPage, setPerPage] = useState(32);
  const [sortBy, setSortBy] = useState('descAge');
  const [currentPage, setCurrentPage] = useState(1);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const optionsCount = [
    { value: '8', label: '8' },
    { value: '16', label: '16' },
    { value: '32', label: '32' },
    { value: `${total}`, label: 'All' },
  ];

  const getSortBy = () => {
    return sortBy
      ? optionsSortBy.find((option) => option.value === sortBy)
      : total;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSortBy = (newValue: any) => {
    setSortBy(newValue.value);
    setCurrentPage(1);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePerPage = (newValue: any) => {
    setPerPage(newValue.value);
    setCurrentPage(1);
  };

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getPerPage = () => {
    return perPage
      ? optionsCount.find((option) => +option.value === perPage)
      : total;
  };

  const loadGoods = useCallback(async () => {
    try {
      setIsLoading(true);

      const allGoods = await getAll();
      const goods = await getPhones(currentPage, perPage, sortBy);

      setTotal(await allGoods.results.length);
      setPhones(await goods.results);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      setIsLoading(false);
    }
  }, [perPage, currentPage, sortBy]);

  useEffect(() => {
    loadGoods();
  }, [currentPage, perPage, sortBy]);

  return (
    <div className="page__container">
      <div className={styles.phonesPage__container}>
        <div>
          <Breadcrumbs location={['/', '/phones']} />
          <h1 className={styles.phonesPage__title}>Mobile phones</h1>

          <p className={styles.phonesPage__totalItems}>
            {`${total} models`}
          </p>

          <div className={styles.phonesPage__sort_container}>
            <div className="grid">
              <div
                className="
                grid__item--mobile--1-2
                grid__item--tablet--1-4
                grid__item--desktop--1-4"
              >
                <div className={styles.phonesPage__sort}>
                  <label
                    htmlFor="phones-sort"
                    className={styles.phonesPage__sort_text}
                  >
                    Sort by:
                  </label>
                  <Select
                    id="phones-sort"
                    classNamePrefix="select"
                    isSearchable={false}
                    value={getSortBy()}
                    defaultValue={{ value: 'default', label: 'Show all' }}
                    options={optionsSortBy}
                    onChange={handleSortBy}
                  />
                </div>
              </div>

              <div
                className="
                grid__item--mobile--3-4
                grid__item--tablet--5-7
                grid__item--desktop--5-7"
              >
                <div className={styles.phonesPage__sort}>
                  <label
                    htmlFor="perPageSelector"
                    className={styles.phonesPage__sort_text}
                  >
                    Items on page
                  </label>

                  <Select
                    id="perPageSelector"
                    classNamePrefix="select"
                    isSearchable={false}
                    value={getPerPage()}
                    defaultValue={{ value: `${total}`, label: 'All' }}
                    options={optionsCount}
                    onChange={handlePerPage}
                  />
                </div>
              </div>
            </div>
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <div className={styles.catalog}>
              {phones.map((phone) => (
                <ProductCard key={phone.slug} phone={phone} />
              ))}
            </div>
          )}
        </div>

        <Pagination
          total={total}
          perPage={perPage}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};
