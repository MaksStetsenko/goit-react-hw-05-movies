import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.backButton};
  color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.standart};
  transition: ${p => p.theme.transitions};
  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.hovered};
    color: ${p => p.theme.colors.backButtonText};
  }
`;

export const AdditionalLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.backButton};
  color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.standart};
  transition: ${p => p.theme.transitions};
  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.hovered};
    color: ${p => p.theme.colors.backButtonText};
  }
  &.active {
    background-color: ${p => p.theme.colors.active};
    color: ${p => p.theme.colors.backButtonText};
  }
`;
