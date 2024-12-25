import Cookies from 'js-cookie';
import { ThreeDots } from 'react-loader-spinner';
import { SiYoutubegaming } from 'react-icons/si';
import GameCard from '../GameCard/index';
import { useState, useEffect } from 'react';
import { themeState } from '../../recoil_state.js';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

import {
  DataDisplayContainer,
  DataContainer,
  Loader,
  GamingVideoContainer,
  GamingVideosList,
  FailedViewContainer,
  FailedViewImage,
  FailedViewHeading,
  FailedViewDesc,
  RetryBtn,
  RouteHeader,
  RouteLogoContainer,
  RouteHeading,
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

  const renderNoSearchResultsView = () => (
    <FailedViewContainer>
      <FailedViewImage
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <FailedViewHeading $darkTheme={darkTheme}>
        No Search results found
      </FailedViewHeading>
      <FailedViewDesc $darkTheme={darkTheme}>
        Try different key words or remove search filter
      </FailedViewDesc>
      <RetryBtn onClick={tryAgain} type="button">
        Retry
      </RetryBtn>
    </FailedViewContainer>
  );

  const renderLoader = () => (
    <Loader>
      <ThreeDots color="#3b82f6" height="50" width="50" />
    </Loader>
  );

  const renderGamingVideos = () => (
    <GamingVideosList>
      {gamingVideosData.map((eachObj) => (
        <GameCard key={eachObj.id} videoData={eachObj} />
      ))}
    </GamingVideosList>
  );

  const renderFailureView = () => (
    <FailedViewContainer>
      <FailedViewImage
        alt="failed view"
        src={
          darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
      />
      <FailedViewHeading $darkTheme={darkTheme}>
        Oops! Something Went Wrong
      </FailedViewHeading>
      <FailedViewDesc $darkTheme={darkTheme}>
        We are having some trouble to complete your request. Please try again.
      </FailedViewDesc>
      <RetryBtn onClick={getGamingVideosData} type="button">
        Retry
      </RetryBtn>
    </FailedViewContainer>
  );

  const getVideosView = () => {
    switch (appStatus) {
      case appConstants.success:
        if (gamingVideosData.length !== 0) {
          return renderGamingVideos();
        }
        return renderNoSearchResultsView();
      case appConstants.inProgress:
        return renderLoader();
      case appConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  const renderDataContainer = () => (
    <DataContainer $darkTheme={darkTheme}>
      <RouteHeader $darkTheme={darkTheme}>
        <RouteLogoContainer $darkTheme={darkTheme}>
          <SiYoutubegaming />
        </RouteLogoContainer>
        <RouteHeading $darkTheme={darkTheme}>Gaming</RouteHeading>
      </RouteHeader>
      <GamingVideoContainer>{getVideosView()}</GamingVideoContainer>
    </DataContainer>
  );

  return <DataDisplayContainer>{renderDataContainer()}</DataDisplayContainer>;
};

export default Gaming;
