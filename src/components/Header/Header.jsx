import React from 'react';
import { Box } from 'components/Box';

import { useLocation } from 'react-router-dom';

import { Container } from '../Common/Common.styled';
import { HeaderStyled, HeaderLink } from './Header.styled';

const Header = () => {
  const location = useLocation();

  return (
    <HeaderStyled>
      <Container>
        <Box as="nav" display="flex" gridGap="20px" w="100%">
          <HeaderLink to="/" state={{ from: location }}>
            Home
          </HeaderLink>
          <HeaderLink to="movies">Movie</HeaderLink>
        </Box>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
