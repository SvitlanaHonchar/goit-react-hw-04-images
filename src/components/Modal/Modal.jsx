import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const ImgModal = ({ toggleModal, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleModal]);

  const handleBackDrop = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackDrop}>
      <div className={css.Modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default ImgModal;

ImgModal.propTypes = {
  children: PropTypes.node,
  toggleModal: PropTypes.func,
};
