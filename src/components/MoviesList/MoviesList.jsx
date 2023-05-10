import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkFilm, MoviesItem, List, MovieTitle } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <MoviesItem key={movie.id}>
          <LinkFilm to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieTitle>{movie.title}</MovieTitle>
          </LinkFilm>
        </MoviesItem>
      ))}
    </List>
  );
};
export default MoviesList;
