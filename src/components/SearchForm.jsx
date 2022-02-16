import { useEffect } from 'react';

const SearchForm = ({
  inputRef,
  searchInput,
  setSearchInput,
  submitHandler,
}) => {
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'red';
  }, []);

  return (
    <form>
      <input
        ref={inputRef}
        type='text'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={(e) => submitHandler(e)}>Search</button>
    </form>
  );
};

export default SearchForm;
