import css from './ImageCard.module.css';

export const ImageCard = ({ item, onClickModal }) => {
  return (
        <img
          className={css.img}
          src={item.urls.small}
          alt={item.alt_description}
          data-id={item.id}
          width= "450"
          height="400"
          onClick = {() => onClickModal(item.urls.regular)}
        />
  );
};