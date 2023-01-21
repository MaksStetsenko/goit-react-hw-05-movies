import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ReviewsList from 'components/ReviewsList';

import { movieAPI } from 'utils/apiServices';
import { renderMashineStatus } from 'utils/options';

const Api = new movieAPI();

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(renderMashineStatus.IDLE);

  useEffect(() => {
    setStatus(renderMashineStatus.IDLE);
    Api.getReviews(movieId).then(reviews => {
      if (reviews.length === 0) {
        setStatus(renderMashineStatus.EMPTY);
        return;
      }

      setStatus(renderMashineStatus.SUCCESS);
      setReviews(reviews);
    });
  }, [movieId]);

  if (status === renderMashineStatus.IDLE) {
    return;
  }

  if (status === renderMashineStatus.EMPTY) {
    return <div>We dot`t have any reviews for this film right now</div>;
  }

  if (status === renderMashineStatus.SUCCESS) {
    return (
      <section>
        <ReviewsList reviews={reviews} />
      </section>
    );
  }
};

export default Reviews;
