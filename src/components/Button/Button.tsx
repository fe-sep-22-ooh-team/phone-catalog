/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import classnames from 'classnames';
import styles from './Button.module.scss';
import { Phone } from '../../types/Phone';

type Props = {
  phone?: Phone;
};

export const Button: React.FC<Props> = () => {
  const [select, setSelect] = useState(false);

  const handleCartButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();

    setSelect(true);
  };

  return (
    <button
      onClick={handleCartButtonClick}
      className={classnames(styles.btn, {
        [styles.btn_selected]: select,
      })}
    >
      {select ? 'Added' : 'Add to cart'}
    </button>
  );
};
