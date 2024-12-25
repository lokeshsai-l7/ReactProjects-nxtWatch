import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { themeState } from '../../recoil_state';
import { useRecoilValue } from 'recoil';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';

const appConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

const VideoItemDetails = () => {
  const [videoItemDetailsData, setVideoItemDetailsData] = useState({});
  const [appStatus, setAppStatus] = useState(appConstants.inProgress);
  const darkTheme = useRecoilValue(themeState);
  const { id } = useParams();
  const { videoUrl } = videoItemDetailsData;

  useEffect(() => {
    getVideosDetailsData();
  }, []);

  const getVideosDetailsData = async () => {
    setAppStatus(appConstants.inProgress);
    const jwtToken = Cookies.get('jwt_token');
    const url = `https://apis.ccbp.in/videos/${id}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      const { data } = response;
      const videoDetails = data.video_details;
      const updatedData = {
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
        },
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      };
      console.log(updatedData);
      setVideoItemDetailsData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PlayerContainer $darkTheme={darkTheme}>
      <ReactPlayer url={videoUrl} controls={true} width="100%" height="50%" />
    </PlayerContainer>
  );
};

export default VideoItemDetails;

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
