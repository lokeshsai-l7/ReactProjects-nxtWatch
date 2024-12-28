import { useEffect, useState } from 'react';

import { themeState, savedVideosAtom } from '../../recoil_state';
import { useRecoilValue, useSetRecoilState } from 'recoil';
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

import Loader from '../Loader/index.jsx';
import FailureView from '../FailureView/index.jsx';
import {
  ResContainer,
  Description,
  ChannelSubscribers,
  ChannelName,
  ChannelTextContainer,
  ChannelImage,
  ChannelContainer,
  PlayerContainer,
  VideoPlayerContainer,
  Title,
  NumberContainer,
  Views,
  DotContainer,
  ButtonItem,
  Line,
} from './styledComponent.js';

const appConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

const VideoItemDetails = () => {
  const [videoItemDetailsData, setVideoItemDetailsData] = useState({});
  const [appStatus, setAppStatus] = useState(appConstants.initial);
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState(null); // 'like', 'dislike', or null
  const setSavedVideos = useSetRecoilState(savedVideosAtom);
  const darkTheme = useRecoilValue(themeState);
  const { id } = useParams();
  const {
    videoUrl = '',
    title = '',
    publishedAt = '',
    viewCount = 0,
    channel = { name: '', profileImageUrl: '', subscriberCount: '' },
    description = '',
  } = videoItemDetailsData;

  useEffect(() => {
    getVideosDetailsData();
  }, []);

  const tryAgain = () => {
    setAppStatus(appConstants.initial);
    getVideosDetailsData();
  };

  const handleLike = () => {
    setStatus((prev) => (prev === 'like' ? null : 'like')); // Toggle like
  };

  const handleDislike = () => {
    setStatus((prev) => (prev === 'dislike' ? null : 'dislike')); // Toggle dislike
  };

  const handleSave = (objectId) => {
    setSaved(!saved);
    setSavedVideos((prevArray) => {
      const isAlreadySaved = prevArray.some((item) => item.id === objectId);

      if (isAlreadySaved) {
        return prevArray.filter((item) => item.id !== objectId);
      } else {
        return [...prevArray, videoItemDetailsData];
      }
    });
  };

  const getVideosDetailsView = () => {
    switch (appStatus) {
      case appConstants.success:
        return renderVideoDetails();
      case appConstants.inProgress:
        return <Loader />;
      case appConstants.failure:
        return <FailureView onClickRetry={tryAgain} />;
      default:
        return null;
    }
  };

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
      console.log(videoDetails);
      const updatedData = {
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: formatDistanceToNow(new Date(videoDetails.published_at)),
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      };
      setVideoItemDetailsData(updatedData);
      setAppStatus(appConstants.success);
    } catch (error) {
      console.log(error);
      setAppStatus(appConstants.failure);
    }
  };

  const renderVideoDetails = () => (
    <PlayerContainer $darkTheme={darkTheme}>
      <VideoPlayerContainer>
        <ReactPlayer
          url={videoUrl}
          controls={true}
          width="100%"
          height="100%"
        />
      </VideoPlayerContainer>
      <Title $darkTheme={darkTheme}>{title}</Title>
      <ResContainer>
        <NumberContainer>
          <Views $darkTheme={darkTheme}>{viewCount} Views</Views>
          <DotContainer $darkTheme={darkTheme}>
            <GoDotFill />
          </DotContainer>
          <Views $darkTheme={darkTheme}>{publishedAt}</Views>
        </NumberContainer>
        <NumberContainer>
          <ButtonItem
            $darkTheme={darkTheme}
            onClick={handleLike}
            $liked={status === 'like'}
          >
            {status === 'like' ? <BiSolidLike /> : <BiLike />}
            {`Like`}
          </ButtonItem>
          <ButtonItem
            $darkTheme={darkTheme}
            onClick={handleDislike}
            $liked={status === 'dislike'}
          >
            {status === 'dislike' ? <BiSolidDislike /> : <BiDislike />}
            {`Dislike`}
          </ButtonItem>
          <ButtonItem
            $darkTheme={darkTheme}
            onClick={() => handleSave(id)}
            $liked={saved}
          >
            <MdPlaylistAdd />
            {`Save`}
          </ButtonItem>
        </NumberContainer>
      </ResContainer>
      <Line $darkTheme={darkTheme} />
      <ChannelContainer>
        <ChannelImage
          $darkTheme={darkTheme}
          alt={channel.name}
          src={channel.profileImageUrl}
        />
        <ChannelTextContainer>
          <ChannelName $darkTheme={darkTheme}>{channel.name}</ChannelName>
          <ChannelSubscribers
            $darkTheme={darkTheme}
          >{`${channel.subscriberCount} subscribers`}</ChannelSubscribers>
        </ChannelTextContainer>
      </ChannelContainer>
      <Description $darkTheme={darkTheme}>{description}</Description>
    </PlayerContainer>
  );

  return getVideosDetailsView();
};

export default VideoItemDetails;
