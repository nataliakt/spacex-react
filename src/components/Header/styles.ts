import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: calc(100% - 64px);
  max-width: 1024px;

  margin: 32px 0;
  padding: 14px;

  border-radius: 18px;

  background-color: rgba(255, 255, 255, 0.5);
`;

export const HeaderLogo = styled.img`
  margin: 14px;
`;

export const HeaderText = styled.h1`
  flex-grow: 1;

  margin: 14px;

  font-size: 20px;
  line-height: 25px;
  text-align: justify;

  color: #fff;
`;
