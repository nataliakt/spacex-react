import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #0C0C0C;
`;

export const AppColumns = styled.div`
  width: calc(100% - 64px);
  max-width: 1024px;

  margin: 32px 0;

  display: flex;
  flex-grow: 1;

  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;

  justify-content: space-between;

  margin: 0 32px 32px;

  color: #fff;
`;
