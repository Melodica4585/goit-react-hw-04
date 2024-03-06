import Modal from 'react-modal';
import { TfiClose } from 'react-icons/tfi';
import css from './ImageModal.module.css';

export const ImageModal = ({ description, img, handleModal, onOpen }) => {
  return (
    <div>
      <Modal
        isOpen={onOpen}
        onRequestClose={handleModal}
        ariaHideApp={false}
        className={css.modal}
      >
        <TfiClose className={css.button} onClick={handleModal} size={25} />
        <img src={img} alt={description} width="100%" height="100%" />
      </Modal>
    </div>
  );
};