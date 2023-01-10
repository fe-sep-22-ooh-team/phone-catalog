import React, { useCallback, useState, useEffect } from 'react';
import Select from 'react-select';
import styles from './PhonesPage.module.scss';
import './select__count.scss';
import { Pagination } from '../../components/Pagination';
import { ProductCard } from '../../components/ProductCard';
import { getAll, getPhones } from '../../api/goods';
import { Phone } from '../../types/Phone';
import { Loader } from '../../components/Loader';

export const PhonesPage: React.FC = () => {
  const [perPage, setPerPage] = useState(16);
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [allPhones, setAllPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const total = allPhones.length;

  const optionsCount = [
    { value: '4', label: '4' },
    { value: '8', label: '8' },
    { value: '16', label: '16' },
    { value: `${total}`, label: 'All' },
  ];

  const optionsSortBy = [
    { value: 'ascAge', label: 'Newest' },
    { value: 'descAge', label: 'Oldest' },
    { value: 'descPrice', label: 'Price: High to Low' },
    { value: 'ascPrice', label: 'Price: Low to High' },
    { value: 'ascName', label: 'Name: A - Z' },
    { value: 'descName', label: 'Name: Z - A' },
    { value: 'default', label: 'Show all' },
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

  const loadGoods = useCallback(async () => {
    try {
      setIsLoading(true);

      const goods = await getPhones(currentPage, perPage);
      const allGoods = await getAll();

      // eslint-disable-next-line no-console
      console.log(allGoods.results);

      setPhones(await goods.results);
      setAllPhones(await allGoods.results);
    } catch (err) {
      throw new Error(`${err}`);
    } finally {
      setIsLoading(false);
    }
  }, [perPage, currentPage]);

  useEffect(() => {
    loadGoods();
  }, [currentPage, perPage, sortBy]);

  const getPerPage = () => {
    return perPage
      ? optionsCount.find((option) => +option.value === perPage)
      : total;
  };

  return (
    <div className={styles.phonesPage__container}>
      <div>
        <h1 className={styles.phonesPage__title}>Mobile phones</h1>

        <p className={styles.phonesPage__totalItems}>
          {`${phones.length} models`}
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
  );
};
