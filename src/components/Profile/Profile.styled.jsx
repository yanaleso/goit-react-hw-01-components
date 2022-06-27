import styled from 'styled-components'

export const Avatar = styled.img`
  width: 25%;
  border-radius: ${p => p.theme.radii.round};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Name = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const UserInfo = styled.p`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  };
  color: ${p => p.theme.colors.text};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
  flex-basis: ${100 / 3}%;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  `;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Quantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
`;
