import React from 'react';

import cartEmpty from '../../assets/img/Cart-empty.svg';

export const TabletsPage: React.FC = () => (
  <div className="
  grid__item--mobile--2-4
  grid__item--tablet--4-9
  grid__item--desktop--8-24"
  >
    <h1 className="page__subtitle">There are no tablets yet</h1>
    <img src={cartEmpty} alt="CartEmpty" />
  </div>
);
