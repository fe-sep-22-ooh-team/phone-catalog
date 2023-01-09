import React, { useState } from 'react';
import styles from './PhonesPage.module.scss';
import { Pagination } from '../../components/Pagination';
import { ProductCard } from '../../components/ProductCard';
import { getNumbers } from '../../utils/utils';

const items = getNumbers(1, 42);

export const PhonesPage: React.FC = () => {
  const [perPage, setPerPage] = useState(items.length);
  const [currentPage, setCurrentPage] = useState(1);

  const total = items.length;

  const firstItem = (currentPage - 1) * perPage;
  const lastItem = Math.min(firstItem + perPage, total);

  const currentItems = items.slice(firstItem, lastItem);

  const handlePerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.phonesPage__container}>
      <div>
        <h1 className={styles.phonesPage__title}>Mobile phones</h1>

        <p className={styles.phonesPage__totalItems}>{`${total} models`}</p>

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
                <select
                  name="phones-sort"
                  id="phones-sort"
                  className={styles.phonesPage__sort_selectMenu}
                >
                  <option value="newest">Newest</option>
                  <option value="newest">Alphabetically</option>
                  <option value="newest">Cheapest</option>
                </select>
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

                <select
                  name="perPageSelector"
                  id="perPageSelector"
                  className={styles.phonesPage__sort_selectMenu}
                  value={perPage}
                  onChange={handlePerPage}
                >
                  <option value={4}>4</option>
                  <option value={8}>8</option>
                  <option value={16}>16</option>
                  <option value={total}>{total}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.catalog}>
          {currentItems.map((item) => (
            <ProductCard key={item} />
            // `Item ${item} `
          ))}
        </div>
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
