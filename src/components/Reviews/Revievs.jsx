import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../Constants/theMoviedApi';
import {
  ReviewList,
  ReviewItem,
  ReviewAuthor,
  ReviewText,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <ReviewList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewAuthor>{review.author}:</ReviewAuthor>
              <ReviewText>{review.content}:</ReviewText>
            </ReviewItem>
          ))}
        </ReviewList>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
export default Reviews;
