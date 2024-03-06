import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onPagination }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={onPagination}>
        Load more images
      </button>
    </div>
  );
};