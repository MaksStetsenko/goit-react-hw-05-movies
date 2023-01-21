import styled from 'styled-components';

export const ReviewsItemStyled = styled.li`
  display: block;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.reviewBg};
  border-radius: ${p => p.theme.radii.standart};
`;

export const ReviewsTitleStyled = styled.h4`
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const ReviewsContentStyled = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
