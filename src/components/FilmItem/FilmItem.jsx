import React from 'react';

import PropTypes from 'prop-types';
import { FilmLinkStyled, FilmItemStyled } from './FilmItem.styled';

const FilmItem = ({ title, linkTo, linkFrom }) => {
  return (
    <FilmItemStyled>
      <FilmLinkStyled to={linkTo} state={linkFrom}>
        {title}
      </FilmLinkStyled>
    </FilmItemStyled>
  );
};

FilmItem.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  linkFrom: PropTypes.shape({
    from: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.any,
      key: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default FilmItem;
