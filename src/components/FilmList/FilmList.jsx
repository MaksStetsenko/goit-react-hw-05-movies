import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import FilmItem from '../FilmItem';

const FilmList = ({ films, path = '' }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(({ id, title }) => {
        return (
          <FilmItem
            key={id}
            title={title}
            linkTo={`${path}${id}`}
            linkFrom={{ from: location }}
          />
        );
      })}
    </ul>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string,
};

export default FilmList;
