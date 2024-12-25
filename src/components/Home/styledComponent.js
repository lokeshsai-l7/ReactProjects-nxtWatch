import styled from 'styled-components';

export const DataDisplayContainer = styled.div`
  background-color: ${(props) => (props.$darkTheme ? '#000000' : '#f1f1f1')};
  display: flex;
  height: 90vh;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  width: 80%;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BannerContainer = styled.div`
  padding: 40px;
  width: 100%;
  height: 25vh;
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
  padding: 30px;
  min-height: 65vh;
  max-height: 90vh;
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
  @media screen and (min-width: 768px) {
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
