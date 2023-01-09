import { Category } from '../../types/Category';
import { CategoryCard } from '../CategoryCard';

import styles from './Categories.module.scss';

type Props = {
  categories: Category[];
};

export const Categories: React.FC<Props> = ({ categories }) => (
  <>
    <h2 className={styles.title}>Shop by category</h2>
    <div className={styles.categories}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  </>
);
