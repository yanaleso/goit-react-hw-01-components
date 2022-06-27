import styled from 'styled-components'

export const Head = styled.thead`
  height: ${p => p.theme.sizes.s};
  background-color: ${p => p.theme.colors.accent};
`;

export const HeadName = styled.th`
  font-size: ${p => p.theme.fontSizes.xs};
  text-transform: uppercase;  
  color: ${p => p.theme.colors.white};
`;

export const Tr = styled.tr`
  height: ${p => p.theme.sizes.s};
  font-size: ${p => p.theme.fontSizes.s};
  text-align: center;
  color: ${p => p.theme.colors.primary};
  :nth-child(2n) {
  background: ${p => p.theme.colors.secondary};
}
  `;

export const Type = styled.td`
  text-transform: capitalize;
`