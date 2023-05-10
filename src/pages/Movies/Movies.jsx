import { useSearchParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchQuery } from '../../Constants/theMoviedApi';
import Search from 'components/Search/Search';
import { MoviesList } from './Movies.styled';
import { LinkFilm, MoviesItem, MovieTitle } from '../Home/Home.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';
  const location = useLocation();

  const onSubmit = query => {
    setSearchParams({ query });
  };
  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchQuery(searchQuery).then(setMovies);
  }, [searchQuery]);

  return (
    <div>
      <Search onSubmit={onSubmit} initialValue={searchQuery} />

      <MoviesList>
        {movies.map(movie => (
          <MoviesItem key={movie.id}>
            <LinkFilm to={`${movie.id}`} state={{ from: location }}>
              <MovieTitle>{movie.title}</MovieTitle>
            </LinkFilm>
          </MoviesItem>
        ))}
      </MoviesList>
    </div>
  );
};
export default Movies;
