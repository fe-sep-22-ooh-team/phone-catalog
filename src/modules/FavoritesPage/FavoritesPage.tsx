import { Breadcrumbs } from '../../components/Breadcrumbs';
import { EmptyFavorites } from '../../components/EmptyFavorites';

export const FavoritesPage: React.FC = () => {
  return (
    <div className="page__container">
      <Breadcrumbs location={['/', '/favorites']} />
      <h1 className="page__title">Favorites page</h1>
      <EmptyFavorites />
    </div>
  );
};
