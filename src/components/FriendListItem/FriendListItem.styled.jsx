import styled from 'styled-components'

export const Status = styled.p`
  width: ${p => p.theme.sizes.xs};
  height: ${p => p.theme.sizes.xs};
  margin-right: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => `${p.isOnline? p.theme.colors.green : p.theme.colors.red}`}
`;

export const Name = styled.p`
  margin-left: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;