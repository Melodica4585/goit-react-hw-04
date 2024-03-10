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

export function ImageModal({ item, isOpen, onClose }) {
  return (
    <div>
      <Modal isOpen={isOpen} style={modalStyles} onRequestClose={onClose} ariaHideApp={false}>
        <img
          className={css.img}
          src={item.urls.regular}
          alt={item.urls.alt_description}
        />
      </Modal>
    </div>
  );
}