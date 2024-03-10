import { useState } from 'react';
import css from './ImageCard.module.css';
import { ImageModal } from '../ImageModal/ImageModal';

export function ImageCard({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.urls.alt_description}
        width= "450"
        height="400"
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <ImageModal
          item={item}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        ></ImageModal>
      )}
    </div>
  );
}