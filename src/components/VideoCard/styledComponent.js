import styled from 'styled-components';

export const Card = styled.li`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 260px;
    flex-grow: 1;
    margin: 10px;
    max-width: 280px;
  }
`;

export const ThumbnailImg = styled.img`
  width: 100%;
`;

export const DetailsContainer = styled.div`
  padding-top: 10px;
  display: flex;
`;

export const ChannelImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const ChannelDetails = styled.div`
  margin: 0px;
  padding: 0px 10px 0px 10px;
`;

export const Title = styled.h1`
  margin: 0px;
  color: ${(props) => (props.$darkTheme ? '#f9f9f9' : '#475569')};
  font-family: 'Roboto';
  font-size: 14px;
`;

export const Details = styled(ChannelDetails)`
  padding: 0px;
  display: flex;
  align-items: center;
  width: 100%;
  color: ${(props) => (props.$darkTheme ? '#e2e8f0' : '#606060')};
`;

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 10px;
`;
