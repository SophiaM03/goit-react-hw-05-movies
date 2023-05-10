import { useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchQuery } from '../../Constants/theMoviedApi';
import Search from 'components/Search/Search';
import MoviesList from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';

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
      <MoviesList movies={movies} />
    </div>
  );
};
export default Movies;
