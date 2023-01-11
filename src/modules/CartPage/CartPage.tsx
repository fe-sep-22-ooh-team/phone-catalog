import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CartItem } from '../../components/CartItem';
import { EmptyCart } from '../../components/EmptyCart';

export const CartPage: React.FC = () => {
  return (
    <div className="page__container">
      <Breadcrumbs location={['/', '/cart']} />
      <h1 className="page__title">Cart</h1>
      <CartItem />
      <EmptyCart />
    </div>
  );
};
