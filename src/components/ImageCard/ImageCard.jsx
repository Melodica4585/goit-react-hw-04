import { useState } from 'react';
import css from './ImageCard.module.css';
import { ImageModal } from '../ImageModal/ImageModal';

export const ImageCard = ({
  data: {
    id,
    urls: { small, regular },
    alt_description,
  },
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(prevValue => !prevValue);
  }

  return (
    <div>
      <li key={id}>
        <img
          className={css.image}
          src={small}
          alt={alt_description}
          width= "400"
          height="350"
          onClick={toggleModal}
        />
        <ImageModal
          description={alt_description}
          img={regular}
          handleModal={toggleModal}
          onOpen={modalIsOpen}
        />
      </li>
    </div>
  );
};