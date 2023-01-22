import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FilmLinkStyled = styled(Link)`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.link};
`;

export const FilmItemStyled = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;
