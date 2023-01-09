/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import classnames from 'classnames';
import styles from './Button.module.scss';

type Props = {
  text: string;
  textAfterClick?: string;
};

export const Button: React.FC<Props> = ({ text, textAfterClick }) => {
  const [select, setSelect] = useState(false);

  const handleCartButtonClick = () => {
    setSelect(true);
  };

  const isSelected = select
    ? textAfterClick
    : text;

  const textToRender = textAfterClick
    ? isSelected
    : text;

  return (
    <button
      onClick={handleCartButtonClick}
      className={classnames(styles.btn, {
        [styles.btn_selected]: select,
      })}
    >
      {textToRender}
    </button>
  );
};
