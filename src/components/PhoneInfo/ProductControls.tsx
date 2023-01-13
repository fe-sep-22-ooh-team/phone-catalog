import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { transformColor } from '../../utils/transformColor';
import styles from './ProductControls.module.scss';

interface Props {
  colors?: string[],
  capacity?: string[],
  phoneId: string,
  setCurrentId: (id: string) => void;
}

export const ProductControls: React.FC<Props> = ({
  colors,
  capacity,
  phoneId,
  setCurrentId,
}) => {
  const transformedLink = phoneId.split('-');

  const changeColor = (param: string) => {
    return `${transformedLink.slice(0, -1).join('-')}-${param}`;
  };

  const changeCapacity = (param: string) => {
    return `${transformedLink.slice(0, -2).join('-')}-${param.toLowerCase()}-${transformedLink.slice(-1)}`;
  };

  return (
    <div className={styles.controls}>
      <div className={styles.controls__item}>
        <h4 className={styles.controls__title}>
          Available colors
          <span className={styles.controls__code}>ID: 80239</span>
        </h4>

        <ul className={styles.controls__params}>
          {colors?.map((currentColor: string) => {
            const divStyle = { background: transformColor(currentColor) };
            const isActive
              = currentColor === transformedLink.slice(-1).toString();

            return (
              <li key={currentColor} className={styles.controls__params_item}>
                <Link
                  to={`/phones/${changeColor(currentColor)}`}
                  className={classNames(styles.controls__params_item_wrap, {
                    [styles.controls__params_item_wrap_active]: isActive,
                  })}
                  onClick={() => setCurrentId(`${changeColor(currentColor)}`)}
                >
                  <div
                    className={styles.controls__params_item_inner}
                    style={divStyle}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.controls__item}>
        <h4 className={styles.controls__title}>Select capacity</h4>

        <ul className={styles.controls__params}>
          {capacity?.map((currentCapacity) => {
            const isActive
              = transformedLink.toString()
                .includes(currentCapacity.toLowerCase());

            return (
              <li
                key={currentCapacity}
                className={styles.controls__params_item}
              >
                <Link
                  to={`/phones/${changeCapacity(currentCapacity)}`}
                  className={classNames(styles.controls__params_capacity, {
                    [styles.controls__params_capacity_active]: isActive,
                  })}
                  onClick={() => setCurrentId(`${changeCapacity(currentCapacity)}`)}
                >
                  {currentCapacity}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
