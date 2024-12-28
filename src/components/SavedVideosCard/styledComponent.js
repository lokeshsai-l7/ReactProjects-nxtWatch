import styled from 'styled-components';

export const Card = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
  }
  width: 100%;
  padding: 10px;
`;

export const ThumbnailImg = styled.img`
  height: 240px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;

export const DetailsContainer = styled.div`
  padding-top: 10px;
  display: flex;
`;

export const ChannelImg = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ChannelDetails = styled.div`
  margin: 0px;
  padding: 0px 10px 0px 10px;
`;

export const Title = styled.h1`
  margin: 0px;
  color: ${(props) => (props.$darkTheme ? '#f9f9f9' : '#231f20')};
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
  color: ${(props) => (props.$darkTheme ? ' #cccccc' : '#64748b')};
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: auto;
  }
`;

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props.$name ? '18px' : '14px')};
    font-weight: ${(props) => (props.$name ? '700' : '500')};
  }
`;

export const SubCon = styled.div`
  display: flex;
  align-items: center;
`;
