import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

import {
  ActorsListStyled,
  ActorNameStyled,
  ActorCharacterStyled,
} from './ActorsList.styled';

const ActorsList = ({ actors }) => {
  return (
    <ActorsListStyled>
      {actors.map(({ id, name, character, actorPhotoPath }) => {
        return (
          <li key={id}>
            <article>
              <Box
                width="150px"
                height="200px"
                overflow="hidden"
                borderRadius="standart"
              >
                <img src={actorPhotoPath} alt={name} />
              </Box>
              <Box width="150px" overflow="hidden" borderRadius="standart">
                <ActorNameStyled>{name}</ActorNameStyled>
                <ActorCharacterStyled>
                  Character: {character}
                </ActorCharacterStyled>
              </Box>
            </article>
          </li>
        );
      })}
    </ActorsListStyled>
  );
};

ActorsList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string,
      actorPhotoPath: PropTypes.string,
    })
  ).isRequired,
};

export default ActorsList;
