import Cookies from 'js-cookie';
import { SiYoutubegaming } from 'react-icons/si';
import GameCard from '../GameCard/index';
import { useState, useEffect } from 'react';
import { themeState } from '../../recoil_state.js';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import RouteHeader from '../RouteHeader/index.jsx';
import Loader from '../Loader/index.jsx';
import FailureView from '../FailureView/index.jsx';

import {
  DataDisplayContainer,
  DataContainer,
  GamingVideoContainer,
  GamingVideosList,
} from './styledComponent.js';

const appConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

const Gaming = () => {
  const [gamingVideosData, setGamingVideosData] = useState([]);
  const [appStatus, setAppStatus] = useState(appConstants.inProgress);
  const darkTheme = useRecoilValue(themeState);

  useEffect(() => {
    getGamingVideosData();
  }, []);

  const tryAgain = () => {
    setAppStatus(appConstants.initial);
    getGamingVideosData();
  };

  const getGamingVideosData = async () => {
    setAppStatus(appConstants.inProgress);
    const jwtToken = Cookies.get('jwt_token');
    const url = `https://apis.ccbp.in/videos/gaming`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      const { data } = response;
      const updatedData = data.videos.map((eachObj) => ({
        id: eachObj.id,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
      }));
      console.log(updatedData);
      setAppStatus(appConstants.success);
      setGamingVideosData(updatedData);
    } catch (error) {
      setAppStatus(appConstants.failure);
    }
  };

  const renderGamingVideos = () => (
    <GamingVideosList>
      {gamingVideosData.map((eachObj) => (
        <GameCard key={eachObj.id} videoData={eachObj} />
      ))}
    </GamingVideosList>
  );

  const getVideosView = () => {
    switch (appStatus) {
      case appConstants.success:
        return renderGamingVideos();
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
      <RouteHeader name={'Gaming'} icon={<SiYoutubegaming />} />
      <GamingVideoContainer>{getVideosView()}</GamingVideoContainer>
    </DataContainer>
  );

  return (
    <DataDisplayContainer $darkTheme={darkTheme}>
      {renderDataContainer()}
    </DataDisplayContainer>
  );
};

export default Gaming;
