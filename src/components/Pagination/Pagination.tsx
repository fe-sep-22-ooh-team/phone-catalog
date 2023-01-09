import React from 'react';
import classNames from 'classnames';
import styles from './Pagination.module.scss';

import { getNumbers } from '../../utils/utils';

interface Props {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const lastPage = Math.ceil(total / perPage);
  const pages = getNumbers(1, lastPage);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  const onFirstPage = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const onLastPage = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ul className={styles.pagination}>
      <li>
        <button
          type="button"
          className={classNames(styles.pagination__link, {
            [styles.pagination__link_disabled]: isFirstPage,
          })}
          disabled={isFirstPage}
          onClick={onFirstPage}
        >
          {'<'}
        </button>
      </li>

      {pages.map(page => (
        <li
          key={page}
        >
          <button
            type="button"
            className={classNames(styles.pagination__link, {
              [styles.pagination__link_active]: page === currentPage,
            })}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        </li>
      ))}

      <li>
        <button
          type="button"
          className={classNames(styles.pagination__link, {
            [styles.pagination__link_disabled]: isLastPage,
          })}
          disabled={isLastPage}
          onClick={onLastPage}
        >
          {'>'}
        </button>
      </li>
    </ul>
  );
};
