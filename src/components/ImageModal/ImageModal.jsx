import Modal from 'react-modal';
import css from './ImageModal.module.css';

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ImageModal = ({ isOpen, onCloseModal, url, alt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
      style={modalStyles}
      ariaHideApp={false} 
    >
        <img
          className={css.image}
          src={url}
          alt={alt}
          onClick={onCloseModal}
        />
    </Modal>
  );
};