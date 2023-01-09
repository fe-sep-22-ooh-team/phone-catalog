import { Category } from '../../types/Category';
import { CategoryCard } from '../CategoryCard';

import styles from './Categories.module.scss';

type Props = {
  categories: Category[];
};

export const Categories: React.FC<Props> = ({ categories }) => (
  <div
    className="grid__item--mobile--1-4
                  grid__item--tablet--1-12
                  grid__item--desktop--1-24"
  >
    <h2 className="page__subtitle">Shop by category</h2>
    <div className={styles.categories}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  </div>
);
