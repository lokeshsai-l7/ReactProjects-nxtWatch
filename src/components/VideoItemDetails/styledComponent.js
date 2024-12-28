import styled from 'styled-components';

export const PlayerContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${(props) => (props.$darkTheme ? '#000000' : '#f1f1f1')};
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const VideoPlayerContainer = styled.div`
  height: 40%;
  @media screen and (min-width: 768px) {
    height: 70%;
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto';
  color: ${(props) => (props.$darkTheme ? '#f1f1f1' : '#383838')};
  font-size: 20px;
`;

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Views = styled.p`
  color: #606060;
  font-family: 'Roboto';
  font-size: 16px;
  margin-right: 10px;
`;

export const DotContainer = styled.div`
  margin-right: 10px;
  font-size: 10px;
`;

export const ButtonItem = styled.button`
  color: ${(props) => (props.$liked ? '#3b82f6' : '#606060')};
  background-color: transparent;
  font-size: 18px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  margin-right: 24px;
  font-family: 'Roboto';
  text-align: left;
  padding: 0px;
`;

export const Line = styled.hr`
  background-color: #606060;
  width: 100%;
  height: 1px;
  border: none;
`;

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ChannelImage = styled.img`
  width: 60px;
  border-radius: 25px;
`;

export const ChannelTextContainer = styled.div`
  margin-left: 20px;
`;

export const ChannelName = styled.h2`
  color: ${(props) => (props.$darkTheme ? '#f1f1f1' : '#383838')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
`;

export const ChannelSubscribers = styled.p`
  color: #606060;
  font-family: 'Roboto';
  font-size: 16px;
`;

export const Description = styled(ChannelSubscribers)`
  color: ${(props) => (props.$darkTheme ? '#f1f1f1' : '#383838')};
`;

export const ResContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;
