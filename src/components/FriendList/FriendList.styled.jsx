import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  };
  `;