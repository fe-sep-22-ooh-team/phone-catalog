import React from 'react';

import { useParams } from 'react-router-dom';

import { PhoneInfo } from '../../components/PhoneInfo';

export const PhoneInfoPage: React.FC = () => {
  const { slug }: any = useParams();

  return <PhoneInfo slug={slug} />;
};
