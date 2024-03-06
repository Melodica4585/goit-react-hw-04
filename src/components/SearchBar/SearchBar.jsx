import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.query.value.trim() === '') {
      toast.error('Enter some query to find images!');
      return;
    }
    onSearch(e.target.query.value);
    e.target.reset();
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <input className={css.input} type="text" name="query" />
        <button className={css.button}>Search</button>
      </form>
    </div>
  );
};