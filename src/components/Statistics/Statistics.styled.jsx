import styled from 'styled-components'

export const Title = styled.h2`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  text-transform: uppercase;
  text-align: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  flex-basis: ${100/5}%;
  color: ${p => p.theme.colors.white};
  background-color: ${getRandomHexColor};
`;

function getRandomHexColor() {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (color !== `#ffffff`) {
    return color;
  }
}