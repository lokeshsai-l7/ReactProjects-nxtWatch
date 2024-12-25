import styled from 'styled-components';

export const Card = styled.li`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 15px;
  }
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const DetailsContainer = styled.div`
  padding-top: 10px;
  display: flex;
  @media screen and (min-width: 768px) {
    margin: 10px;
  }
`;

export const ChannelImg = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const ChannelDetails = styled.div`
  margin: 10px;
  padding: 0px 10px 0px 10px;
`;

export const Title = styled.h1`
  margin: 0px;
  color: ${(props) => (props.$darkTheme ? '#f9f9f9' : '#475569')};
  font-family: 'Roboto';
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Details = styled(ChannelDetails)`
  padding: 0px;
  display: flex;
  align-items: center;
  width: 100%;
  color: ${(props) => (props.$darkTheme ? '#475569' : '#606060')};
`;

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 10px;
`;
