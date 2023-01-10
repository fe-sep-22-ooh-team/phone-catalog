import React, { useCallback, useState, useEffect } from 'react';
import styles from './PhonesPage.module.scss';
// import { Pagination } from '../../components/Pagination';
import { ProductCard } from '../../components/ProductCard';
// import { getNumbers } from '../../utils/utils';
import { getPhones } from '../../api/goods';
import { Phone } from '../../types/Phone';

// const items = getNumbers(1, 42);

export const PhonesPage: React.FC = () => {
  const [perPage, setPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [phones, setPhones] = useState<Phone[]>([]);

  // const total = items.length;

  // const firstItem = (currentPage - 1) * perPage;
  // const lastItem = Math.min(firstItem + perPage, total);

  // const currentItems = items.slice(firstItem, lastItem);

  const handlePerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  // const onPageChange = (newPage: number) => {
  //   setCurrentPage(newPage);
  // };

  const loadGoods = useCallback(async () => {
    try {
      const response = await getPhones(currentPage, perPage);

      // setPhones(...response);

      setPhones(response.results);
      setTotalPages(response.totalPages);

      // eslint-disable-next-line no-console
      console.log(response);
      // eslint-disable-next-line no-console
      console.log(phones, totalPages);
    } catch {
      return true;
    }

    return false;
  }, [perPage, currentPage]);

  useEffect(() => {
    loadGoods();
  }, [currentPage, perPage]);

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
                  {/* <option value={1}>{1}</option> */}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.catalog}>
          {phones.length
            ? phones.map((phone) => (
              <ProductCard key={phone.id} phone={phone} />
              // `Item ${item} `
            ))
            : 'Loading...'}
        </div>
      </div>

      {/* <Pagination
        total={12}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      /> */}
    </div>
  );
};
