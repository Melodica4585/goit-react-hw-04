import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

export function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.elements.input.value.trim() === "") {
      toast.error("Enter some query to find image!");
      return;
    }

    onSubmit(e.target.elements.input.value);
  };
  return (
    <header className={css.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="input"
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}