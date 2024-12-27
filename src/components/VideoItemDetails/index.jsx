import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { themeState, savedVideosAtom } from '../../recoil_state';
import { useRecoilValue, useRecoilState } from 'recoil';
import { themeState } from '../../recoil_state';
import { useRecoilValue } from 'recoil';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { formatDistanceToNow } from 'date-fns';
import { GoDotFill } from 'react-icons/go';
import { BiSolidLike } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { BiSolidDislike } from 'react-icons/bi';
import { MdPlaylistAdd } from 'react-icons/md';

const appConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

const VideoItemDetails = () => {
  const [videoItemDetailsData, setVideoItemDetailsData] = useState({});
  const [appStatus, setAppStatus] = useState(appConstants.inProgress);
  const [status, setStatus] = useState(null);
  const [saved, setSaved] = useState(false); // 'like', 'dislike', or null
  const [savedVideos, setSavedVideos] = useRecoilState(savedVideosAtom);
  const darkTheme = useRecoilValue(themeState);
  const { id } = useParams();
  const { videoUrl, title, publishedAt, viewCount } = videoItemDetailsData;
  console.log(savedVideos);
  const handleLike = () => {
    setStatus((prev) => (prev === 'like' ? null : 'like')); // Toggle like
  };

  const handleDislike = () => {
    setStatus((prev) => (prev === 'dislike' ? null : 'dislike')); // Toggle dislike
  };

  const savingVideos = () => {
    if (saved === true) {
      setSavedVideos([...savedVideos, videoItemDetailsData]);
    }
  };

  const handleSave = () => {
    setSaved(!saved, savingVideos());
  };

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
        publishedAt: formatDistanceToNow(new Date(videoDetails.published_at)),
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
      <VideoPlayerContainer>
        <ReactPlayer
          url={videoUrl}
          controls={true}
          width="100%"
          height="100%"
        />
      </VideoPlayerContainer>
      <Title>{title}</Title>
      <NumberContainer>
        <Views>{viewCount} Views</Views>
        <DotContainer>
          <GoDotFill />
        </DotContainer>
        <Views>{publishedAt}</Views>
      </NumberContainer>
      <NumberContainer>
        <ButtonItem onClick={handleLike} $liked={status === 'like'}>
          {status === 'like' ? <BiSolidLike /> : <BiLike />}
          {`Like`}
        </ButtonItem>
        <ButtonItem onClick={handleDislike} $liked={status === 'dislike'}>
          {status === 'dislike' ? <BiSolidDislike /> : <BiDislike />}
          {`Dislike`}
        </ButtonItem>
        <ButtonItem onClick={handleSave} $liked={saved}>
          <MdPlaylistAdd />
        </ButtonItem>
      </NumberContainer>
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

export const VideoPlayerContainer = styled.div`
  height: 40%;
  @media screen and (min-width: 768px) {
    height: 70%;
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto';
  color: #383838;
  font-size: 20px;
`;

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Views = styled.p`
  color: #606060;
  font-family: 'Roboto';
  font-size: 16px;
  margin-right: 10px;
`;

const DotContainer = styled.div`
  margin-right: 10px;
  font-size: 10px;
`;

const ButtonItem = styled.button`
  color: ${(props) => (props.$liked ? '#3b82f6' : '#606060')};
  background-color: transparent;
  font-size: 18px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-family: 'Roboto';
`;
