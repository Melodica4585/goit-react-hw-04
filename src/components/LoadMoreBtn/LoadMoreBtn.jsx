import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={onClick}>
        Load more images
      </button>
    </div>
  );
};