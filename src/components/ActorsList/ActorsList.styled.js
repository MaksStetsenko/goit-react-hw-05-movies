import styled from 'styled-components';

export const ActorsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[3]}px;
`;

export const ActorNameStyled = styled.p`
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ActorCharacterStyled = styled.p`
  margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
