import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ items, onClickModal }) => {
  return (
    <>
    <ul className={css.container}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} 
          onClickModal={onClickModal}
          />
        </li>
      ))}
    </ul>
    </>
  );
};