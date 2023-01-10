import { ProductCard } from '../ProductCard';

import { Phone } from '../../types/Phone';

import styles from './Featured.module.scss';

type Props = {
  title: string;
  phones: Phone[];
};

export const Featured: React.FC<Props> = ({ title, phones }) => {
  return (
    <>
      <div
        className="grid__item--mobile--1-4
                grid__item--tablet--1-12
                grid__item--desktop--1-24"
      >
        <h2 className="page__subtitle">{title}</h2>
        <div className={styles.featured}>
          <div className={styles.content}>
            {phones.map((phone) => (
              <ProductCard key={phone.slug} phone={phone} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
