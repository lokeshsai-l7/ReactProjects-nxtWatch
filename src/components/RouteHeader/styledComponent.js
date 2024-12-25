import styled from 'styled-components';

export const RouteHeaderContainer = styled.div`
  background-color: ${(props) => (props.$darkTheme ? '#0f0f0f' : '#cccccc')};
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 10px 0px 10px 20px;
  @media screen and (min-width: 768px) {
    padding-left: 40px;
  }
`;

export const RouteLogoContainer = styled.div`
  background-color: ${(props) => (props.$darkTheme ? '#000000' : '#94a3b8')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  font-size: 24px;
  width: 50px;
  height: 50px;
  border-radius: 40px;
  color: #ff0000;
  font-size: 30px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    width: 50px;
    height: 50px;
    margin-right: 30px;
  }
`;

export const RouteHeading = styled.h1`
  color: ${(props) => (props.$darkTheme ? '#ffffff' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 26px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
