import { useState, useEffect, useRef } from 'react';
import SearchForm from './SearchForm';

const Unsplash = () => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);

  const inputRef = useRef();
  console.log(inputRef);

  //Grab API KEY from .env file.
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URI = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=10&query=${search}&page=${page}`;

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setSearchInput('');
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
    inputRef.current.focus();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URI);
        const results = await response.json();
        setData({ results, loading: false, error: null });
      } catch (error) {
        setData({ results: null, loading: false, error });
      }
    };
    fetchData();
  }, [URI]);

  if (data.loading) return <p>Loading.....</p>;
  if (data.error) return <p>{data.error}</p>;

  const imageList = data.results.results.map((image) => (
    <img key={image.id} src={image.urls.thumb} alt='' />
  ));

  return (
    <div>
      <SearchForm
        inputRef={inputRef}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        submitHandler={submitHandler}
      />
      {imageList}
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Unsplash;
