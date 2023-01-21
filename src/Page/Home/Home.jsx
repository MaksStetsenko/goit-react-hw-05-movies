import React, { useState, useEffect } from 'react';

import FilmList from '../../components/FilmList';

import { Container } from 'components/Common/Common.styled';

import { movieAPI } from 'utils/apiServices';

const Api = new movieAPI();

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setPopularMovies(await Api.getTrendingMovies());
    };
    fetchPopularMovies();
  }, []);

  return (
    <Container>
      <h2>Today in trends</h2>
      <FilmList films={popularMovies} path="movies/" />
    </Container>
  );
};

export default Home;
