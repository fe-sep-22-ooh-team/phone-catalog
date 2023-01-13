import React, { useEffect, useState } from 'react';
import { PhoneWithCount } from '../../types/PhoneWithCount';
import { Phone } from '../../types/Phone';

interface ContextValues {
  cartList: PhoneWithCount[];
  setCartList: React.Dispatch<React.SetStateAction<PhoneWithCount[]>>;
  favList: Phone[];
  setFavList: React.Dispatch<React.SetStateAction<Phone[]>>;
  currentId: string;
  setCurrentId: (id: string) => void;
}

export const ContextFavCart = React.createContext<ContextValues>({
  cartList: [],
  setCartList: () => {},
  favList: [],
  setFavList: () => { },
  currentId: '',
  setCurrentId: () => '',
});

type Props = {
  children: React.ReactNode;
};

export const ContextFavCartProvider: React.FC<Props> = ({ children }) => {
  const getCartStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cartList, setCartList] = useState(getCartStorage);
  const getFavStorage = JSON.parse(localStorage.getItem('favorites') || '[]');
  const [favList, setFavList] = useState(getFavStorage);
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartList));
  }, [cartList]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favList));
  }, [favList]);

  const contextValues = {
    cartList,
    setCartList,
    favList,
    setFavList,
    currentId,
    setCurrentId,
  };

  return (
    <ContextFavCart.Provider value={contextValues}>
      {children}
    </ContextFavCart.Provider>
  );
};
