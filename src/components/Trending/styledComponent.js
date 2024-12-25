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
`;

export const DataContainer = styled.div`
  height: 80vh;
  }
`;

export const TrendingVideoContainer = styled.div`
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

export const TrendingVideosList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`;
