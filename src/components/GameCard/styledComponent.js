import styled from 'styled-components';

export const Card = styled.li`
  width: 40%;
  flex-grow: 1;
  margin: 5px 5px 20px 5px;
  @media screen and (min-width: 768px) {
    width: 240px;
    margin: 10px 10px 30px 10px;
  }
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Title = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
`;

export const ViewCount = styled.p`
  color: #616e7c;
  margin: 0px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
`;
