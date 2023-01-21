import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadows.toBottom};
`;

export const HeaderLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.link};
  transition: ${p => p.theme.transitions};
  &.active {
    color: ${p => p.theme.colors.active};
  }
  &:hover:not(.active) {
    color: ${p => p.theme.colors.hovered};
  }
`;
