import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../Constants/theMoviedApi';
import {
  CastList,
  CastItem,
  CastImg,
  CastName,
  CastCharacter,
  CastNoImage,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(setCasts);
  }, [movieId]);

  return (
    <>
      {casts.length ? (
        <CastList>
          {casts.map(cast => (
            <CastItem key={cast.id}>
              <CastImg
                src={
                  cast.profile_path ? (
                    `https://www.themoviedb.org/t/p/w500/${cast.profile_path}`
                  ) : (
                    <CastNoImage />
                  )
                }
                alt={cast.name}
              />
              <CastName>{cast.name}</CastName>
              <CastCharacter>{cast.character}</CastCharacter>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <div> We don't have cast for this movie</div>
      )}
    </>
  );
};
export default Cast;
