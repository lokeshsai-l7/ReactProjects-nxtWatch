import styled from 'styled-components';

export const DataDisplayContainer = styled.div`
  display: flex;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 90vh;
  }
  width: 80%;
  flex-direction: column;
`;

export const DataContainer = styled.div`
  background-color: ${(props) => (props.$darkTheme ? '#000000' : '#f1f1f1')};
  min-height: 90vh;
  @media screen and (min-width: 768px) {
    min-height: 60vh;
  }
`;

export const Loader = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GamingVideoContainer = styled.div`
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GamingVideosList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`;

export const FailedViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

export const FailedViewImage = styled.img`
  width: 220px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const FailedViewHeading = styled.h1`
  color: ${(props) => (props.$darkTheme ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const FailedViewDesc = styled.p`
  color: ${(props) => (props.$darkTheme ? '#64748b' : '#475569')};
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const RetryBtn = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  outline: none;
  hover: cursor;
  font-family: 'Roboto';
  font-size: 16px;
  padding: 10px 20px 10px 20px;
`;

export const RouteHeader = styled.div`
  background-color: ${(props) => (props.$darkTheme ? '#0f0f0f' : '#cccccc')};
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
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 40px;
  color: #ff0000;
  font-size: 30px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    width: 80px;
    height: 80px;
    margin-right: 30px;
  }
`;

export const RouteHeading = styled.h1`
  color: ${(props) => (props.$darkTheme ? '#ffffff' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 26px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`;
