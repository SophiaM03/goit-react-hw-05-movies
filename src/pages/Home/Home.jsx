import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTrending } from '../../Constants/theMoviedApi';
import { Main, Title } from './Home.styled';
import MoviesList from '../../components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <>
      <Main>
        <Title>Trending movies</Title>
        <MoviesList movies={movies} />
      </Main>
    </>
  );
};
export default Home;
