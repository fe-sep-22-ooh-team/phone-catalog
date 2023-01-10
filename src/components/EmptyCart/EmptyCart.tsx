import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.scss';

export const EmptyCart: React.FC = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.empty__content}>
        <div className={styles.empty__box}>
          <div
            className={styles.empty__img_box}
          />
          <div className={styles.empty__subtitle}>
            Your cart is Empty
          </div>
          <div className={styles.empty__comment}>
            Add something to make me happy &#128512;
          </div>
          <Link to="/phones" className={styles.empty__button}>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};
