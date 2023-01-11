import { CartItem } from '../../components/CartItem';
import { EmptyCart } from '../../components/EmptyCart';

export const CartPage: React.FC = () => {
  return (
    <>
      <h1 className="page__title">Cart</h1>
      <CartItem />
      <EmptyCart />
    </>
  );
};
