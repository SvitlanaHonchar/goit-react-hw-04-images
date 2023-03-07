import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('Enter your query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <ImSearch style={{ width: 20, height: 20 }} />
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          autoFocus
          onChange={handleInput}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
