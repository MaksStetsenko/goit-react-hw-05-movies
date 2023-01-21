import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm';
import FilmList from '../../components/FilmList';

import { Container } from 'components/Common/Common.styled';

import { movieAPI } from 'utils/apiServices';

const Api = new movieAPI();

const Movie = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handlerSubmit = e => {
    e.preventDefault();

    console.log(e.target.elements.Search.value);
    const searchQuery = e.target.elements.Search.value.trim().toLowerCase();

    setSearchParams(searchQuery !== '' ? { query: searchQuery } : {});

    e.target.reset();
  };

  useEffect(() => {
    if (!query) return;
    Api.searchMovie(query).then(setSearchResult);
  }, [query]);

  return (
    <Container>
      <h2>What we finded</h2>
      <SearchForm onSubmit={handlerSubmit} />
      {searchResult.length > 0 && <FilmList films={searchResult} />}
    </Container>
  );
};

export default Movie;
