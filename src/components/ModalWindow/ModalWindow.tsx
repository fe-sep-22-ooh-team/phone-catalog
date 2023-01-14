import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import styles from './ModalWindow.module.scss';
import { ContextFavCart } from '../ContextFavCart';
import Delete from '../../assets/img/DeleteLight.svg';

interface Props {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalWindow: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const { setCartList } = useContext(ContextFavCart);
  const navigate = useNavigate();
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClearCart = () => {
    setCartList([]);
    localStorage.setItem('cart', JSON.stringify([]));
    setIsOpen(false);
    navigate('/');
  };

  return (
    <Modal
      isOpen={isOpen}
      className={styles.modal}
      contentLabel="Shopping Cart"
      onRequestClose={handleClose}
      ariaHideApp={false}
    >
      <div className={styles.modal__header}>
        <h2 className={styles.modal__title}>Shopping Cart</h2>
        <button
          type="button"
          onClick={handleClose}
        >
          <img src={Delete} alt="Close button" />
        </button>
      </div>
      <p className={styles.modal__text}>
        Checkout is not implemented yet. Do you want to clear the Cart?
      </p>
      <div className={styles.modal__buttons}>
        <button
          type="button"
          className={styles.modal__buttons_button}
          onClick={handleClose}
        >
          Close
        </button>
        <button
          type="button"
          className={styles.modal__buttons_button}
          onClick={handleClearCart}
        >
          Clear the cart
        </button>
      </div>
    </Modal>
  );
};
