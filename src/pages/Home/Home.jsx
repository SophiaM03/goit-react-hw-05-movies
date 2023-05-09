import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../../Constants/theMoviedApi';
import {
  LinkFilm,
  Main,
  MoviesItem,
  MoviesList,
  MovieTitle,
  Title,
} from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <>
      <Main>
        <Title>Trending movies</Title>
        <MoviesList>
          {movies.map(movie => (
            <MoviesItem key={movie.id}>
              <LinkFilm to={`movies/${movie.id}`} state={{ from: location }}>
                <MovieTitle>{movie.title}</MovieTitle>
              </LinkFilm>
            </MoviesItem>
          ))}
        </MoviesList>
      </Main>
    </>
  );
};
export default Home;
