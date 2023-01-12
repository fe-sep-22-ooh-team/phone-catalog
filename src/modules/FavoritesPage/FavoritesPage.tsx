import { useContext } from 'react';
import styles from './FavoritesPage.module.scss';

import { EmptyFavorites } from '../../components/EmptyFavorites';
import { ContextFavCart } from '../../components/ContextFavCart';
import { ProductCard } from '../../components/ProductCard';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const FavoritesPage: React.FC = () => {
  const { favList } = useContext(ContextFavCart);

  const totalAmount = favList.length;

  return (
    <div className="page__container">
      <div className={styles.fav__container}>
        <Breadcrumbs location={['/', '/favorites']} />
        {favList.length > 0 ? (
          <>
            <h1 className={styles.fav__title}>Favorites page</h1>
            <p className={styles.fav__text}>{`${totalAmount} items`}</p>
            <div className="grid">
              <div
                className="
                  grid__item--mobile--1-4
                  grid__item--tablet--1-12
                  grid__item--desktop--1-16"
              >
                <div>
                  {favList.map((phone) => (
                    <ProductCard key={phone.slug} phone={phone} />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className={styles.fav__title}>Favorites page</h1>
            <EmptyFavorites />
          </>
        )}
      </div>
    </div>
  );
};
