import React from 'react';

import cartEmpty from '../../assets/img/Cart-empty.svg';

export const AccessoriesPage: React.FC = () => (
  <div className="grid__item--tablet--1-9 grid__item--desktop--1-24">
    <h1 className="page__subtitle">Sorry, no products here yet</h1>
    <img src={cartEmpty} alt="CartEmpty" />
  </div>
);
