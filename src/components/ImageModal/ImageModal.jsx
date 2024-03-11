import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { BsXLg } from "react-icons/bs";

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

export const ImageModal = ({ isOpen, image, onCloseModal }) => {
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
          src={image.urls.regular}
          alt={image.alt_description}
        />
      <button className={css.button} onClick={onCloseModal}>
        <BsXLg />
      </button>
    </Modal>
  );
};