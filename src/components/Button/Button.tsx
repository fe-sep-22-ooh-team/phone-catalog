/* eslint-disable react/button-has-type */
import React from 'react';

import classnames from 'classnames';
import styles from './Button.module.scss';

type Props = {
  text: string;
  textAfterClick?: string;
  onClick?: () => void;
  isActiveCart?: boolean;
};

export const Button: React.FC<Props> = ({
  text,
  textAfterClick,
  onClick,
  isActiveCart,
}) => {
  const isSelected = isActiveCart ? textAfterClick : text;

  const textToRender = textAfterClick ? isSelected : text;

  return (
    <button
      onClick={onClick}
      className={classnames(styles.btn, {
        [styles.btn_selected]: isActiveCart,
      })}
    >
      {textToRender}
    </button>
  );
};
