import { Link } from 'react-router-dom';
import styles from './EmptyFavorites.module.scss';

export const EmptyFavorites: React.FC = () => (
  <div className={styles.empty}>
    <div className={styles.empty__content}>
      <div className={styles.empty__box}>
        <div className={styles.empty__img_box} />
        <div className={styles.empty__subtitle}>
          No favorites yet!
        </div>
        <div className={styles.empty__comment}>
          Save your favorite products and find them here later
        </div>
        <Link to="/phones" className={styles.empty__button}>
          Add favorites
        </Link>
      </div>
    </div>
  </div>
);
