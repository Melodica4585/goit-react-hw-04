import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export function ImageGallery({ items }) {
  return (
    <ul className={css.container}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}