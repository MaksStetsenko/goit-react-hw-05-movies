import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../Box';
import {
  ReviewsItemStyled,
  ReviewsTitleStyled,
  ReviewsContentStyled,
} from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <Box as="ul" display="flex" flexDirection="column" gridGap={4}>
      {reviews.map(({ id, author, content }) => {
        return (
          <ReviewsItemStyled key={id}>
            <ReviewsTitleStyled>{author}</ReviewsTitleStyled>
            <ReviewsContentStyled>{content}</ReviewsContentStyled>
          </ReviewsItemStyled>
        );
      })}
    </Box>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default ReviewsList;
