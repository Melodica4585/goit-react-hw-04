import css from './LoadMoreBtn.module.css';

export function LoadMoreBtn({ handleLoadMore }) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={handleLoadMore}>
        Load more images
      </button>
    </div>
  );
}