import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  background-color: #0C0C0C;
`;

export const AppColumns = styled.div`
  align-self: stretch;

  display: flex;
  flex-grow: 1;

  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;

  justify-content: space-between;

  margin: 0 32px 32px;

  color: #fff;
`;
