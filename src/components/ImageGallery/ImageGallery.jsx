import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ items }) => {
  return (
    <ul className={css.container}>
      {items.map(item => (
        <ImageCard data={item} key={item.id} />
      ))}
    </ul>
  );
};