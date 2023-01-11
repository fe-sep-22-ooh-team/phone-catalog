import { EmptyFavorites } from '../../components/EmptyFavorites';

export const FavoritesPage: React.FC = () => {
  return (
    <>
      <h1 className="page__title">Favorites page</h1>
      <EmptyFavorites />
    </>
  );
};
