import { useSearchParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchQuery } from '../../Constants/theMoviedApi';
import Search from 'components/Search/Search';
import { MoviesList } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const location = useLocation();

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchQuery(query).then(setMovies);
  }, [query]);

  return (
    <div>
      <Search onSubmit={onSubmit} initialValue={query} />

      <MoviesList
        movies={movies}
        location={location}
        title={query ? `Search results by word "${query}"` : `Enter your query`}
      />
    </div>
  );
};
export default Movies;
