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

export const BannerContainer = styled.div`
  padding: 40px;
  width: 100%;
  height: 30vh;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  position: relative;
  display: ${(props) => (props.$close ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
`;

export const WebsiteLogo = styled.img`
  @media screen and (max-width: 768px) {
    width: 140px;
  }
  width: 160px;
`;

export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-family: 'Roboto';
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const PremiumText = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: #0f0f0f;
  width: 70%;
`;

export const GetItNow = styled.button`
  background-color: transparent;
  border: 2px solid #0f0f0f;
  padding: 5px 15px 5px 15px;
  font-size: 20px;
  font-family: 'Roboto';
  width: 200px;
`;

export const DataContainer = styled.div`
  background-color: ${(props) => (props.$darkTheme ? '#000000' : '#f1f1f1')};
  padding: 30px;
  min-height: 90vh;
  @media screen and (min-width: 768px) {
    min-height: 60vh;
  }
`;

export const SearchContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
  margin-left: 10px;
  width: 50%;
  display: flex;
  align-items: center;
  padding: 0px;
  border: 1px solid #616e7c;
`;

export const SearchInput = styled.input`
  width: 80%;
  padding: 6px 14px 6px 14px;
  outline: none;
  border: none;
  font-size: 14px;
  background-color: ${(props) =>
    props.$darkTheme ? 'transparent' : '#ffffff'};
  color: ${(props) => (props.$darkTheme ? '#616e7c' : '#0f0f0f')};
`;

export const SearchImgBtn = styled.button`
  background-color: ${(props) => (props.$darkTheme ? '#181818' : '#e2e8f0')};
  margin: 0px;
  padding: 6px 14px 6px 14px;
  border: none;
  border-left: 1px solid #616e7c;
  color: #616e7c;
  font-size: 14px;
  width: 20%;
`;

export const VideoContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 768px) {
    height: ${(props) => (props.$close ? '90vh' : '60vh')};
    margin-top: 8px;
  }
`;

export const VideosList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const FailedViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 90vh;
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

export const Loader = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
