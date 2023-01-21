import React from 'react';
import { Box } from 'components/Box';

import PropTypes from 'prop-types';
import MovieGenres from 'components/MovieGenres';
import { Container } from 'components/Common/Common.styled';

const Card = ({
  movieDetales: { genres, title, posterPath, vote_average, overview },
}) => {
  const userScore = vote_average
    ? `${Math.round(vote_average * 10)}%`
    : 'No users votes';

  return (
    <Box as="section" mb={5} pb={4} boxShadow="toBottom">
      <Container>
        <Box display="flex" gridGap="20px">
          <Box
            width="200px"
            height="300px"
            overflow="hidden"
            objectFit="cover"
            flex="0 0 auto"
            borderRadius="standart"
          >
            <img src={posterPath} alt={title} />
          </Box>
          <Box>
            <h2>{title}</h2>
            <p>User score: {userScore}</p>

            <h3>Overview</h3>
            <div>{overview}</div>

            <h4>Genres</h4>
            <MovieGenres genres={genres} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

Card.propTypes = {
  movieDetales: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};

export default Card;
