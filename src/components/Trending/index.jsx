import Cookies from 'js-cookie';
import { HiFire } from 'react-icons/hi';
import { themeState } from '../../recoil_state.js';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from '../Loader/index.jsx';
import FailureView from '../FailureView/index.jsx';
import RouteHeader from '../RouteHeader/index';
import TrendingCard from '../TrendingCard/index';

import {
  DataDisplayContainer,
  DataContainer,
  TrendingVideoContainer,
  TrendingVideosList,
} from './styledComponent';

const appConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

const Trending = () => {
  const [trendingVideosData, setTrendingVideosData] = useState([]);
  const [appStatus, setAppStatus] = useState(appConstants.inProgress);
  const darkTheme = useRecoilValue(themeState);

  useEffect(() => {
    getTrendingVideosData();
  }, []);

  const tryAgain = () => {
    setAppStatus(appConstants.initial);
    getTrendingVideosData();
  };

  const getTrendingVideosData = async () => {
    setAppStatus(appConstants.inProgress);
    const jwtToken = Cookies.get('jwt_token');
    const url = `https://apis.ccbp.in/videos/trending`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      const { data } = response;
      console.log(data);
      const updatedData = data.videos.map((eachObj) => ({
        channel: {
          name: eachObj.channel.name,
          profileImageUrl: eachObj.channel.profile_image_url,
        },
        publishedAt: eachObj.published_at,
        id: eachObj.id,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
      }));
      setAppStatus(appConstants.success);
      setTrendingVideosData(updatedData);
    } catch (error) {
      setAppStatus(appConstants.failure);
    }
  };

  const renderTrendingVideos = () => (
    <TrendingVideosList>
      {trendingVideosData.map((eachObj) => (
        <TrendingCard key={eachObj.id} videoData={eachObj} />
      ))}
    </TrendingVideosList>
  );

  const getVideosView = () => {
    switch (appStatus) {
      case appConstants.success:
        return renderTrendingVideos();
      case appConstants.inProgress:
        return <Loader />;
      case appConstants.failure:
        return <FailureView onClickRetry={tryAgain} />;
      default:
        return null;
    }
  };

  const renderDataContainer = () => (
    <DataContainer>
      <RouteHeader name={'Trending'} icon={<HiFire />} />
      <TrendingVideoContainer>{getVideosView()}</TrendingVideoContainer>
    </DataContainer>
  );
  return (
    <DataDisplayContainer $darkTheme={darkTheme}>
      {renderDataContainer()}
    </DataDisplayContainer>
  );
};

export default Trending;
