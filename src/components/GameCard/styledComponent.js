import styled from 'styled-components';

export const Card = styled.li`
  width: 150px;
  flex-grow: 1;
  margin: 5px 5px 20px 5px;
  @media screen and (min-width: 768px) {
    width: 260px;
    margin: 10px 10px 30px 10px;
  }
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Title = styled.h1`
  color: ${(props) => (props.$darkTheme ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ViewCount = styled.p`
  color: ${(props) => (props.$darkTheme ? '#cbd5e1' : '#616e7c')};
  margin: 0px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
