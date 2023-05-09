import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchDetails } from '../../Constants/theMoviedApi';
import { About, Img, Movies, Nav, Button } from './MovieDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Link>
        <Button type="button"> </Button>
      </Link>

      <Movies>
        <Img
          src={movie.poster_path`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width="250"
        />
        <About>
          <h2>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h2>
          <p>User Score: {Math.floor(movie.vote_average * 10)}%</p>
          <h3>
            Overview
            <p>{movie.overview}</p>
          </h3>
          {movie.genres && (
            <>
              <h3>Genres</h3>
              <p>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </p>
            </>
          )}
        </About>
      </Movies>

      <Nav>
        <Link to={'cast'}>Cast</Link>
        <Link to={'reviews'}>Reviews</Link>
      </Nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MoviesDetails;
