import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { RiCloseLargeFill } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';

import {
  DataDisplayContainer,
  BannerContainer,
  WebsiteLogo,
  CloseBtn,
  PremiumText,
  GetItNow,
  DataContainer,
  SearchContainer,
  SearchInput,
  SearchImgBtn,
  VideoContainer,
  VideosList,
} from './styledComponent.js';

import VideoCard from '../VideoCard/index.jsx';
import Loader from '../Loader/index.jsx';
import FailureView from '../FailureView/index.jsx';
import { themeState } from '../../recoil_state';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

const Home = () => {
  const [closeBanner, setCloseBanner] = useState(false);
  const [apiStatus, setApiStatus] = useState(apiConstants.initial);
  const [inputSearch, setInputSearch] = useState('');
  const [videosData, setVideosData] = useState([]);
  const darkTheme = useRecoilValue(themeState);

  useEffect(() => {
    getVideosData();
  }, []);

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
      <RetryBtn onClick={getVideosData} type="button">
        Retry
      </RetryBtn>
    </FailedViewContainer>
  );

  const renderVideos = () => {
    return (
      <VideosList>
        {videosData.map((eachObj) => (
          <VideoCard key={eachObj.id} videoDetails={eachObj} />
        ))}
      </VideosList>
    );
  };

  const onClickEnter = (event) => {
    if (event.key === 'Enter') {
      getVideosData();
    }
  };

  const onClickRetry = () => {
    getVideosData();
  };

  const getVideosView = () => {
    switch (apiStatus) {
      case apiConstants.success:
        if (videosData.length !== 0) {
          return renderVideos();
        }
        return renderNoSearchResultsView();
      case apiConstants.inProgress:
        return <Loader />;
      case apiConstants.failure:
        return <FailureView onClickRetry={onClickRetry} />;
      default:
        return null;
    }
  };

  const renderBanner = () => {
    return (
      <BannerContainer $close={closeBanner}>
        <CloseBtn type="button" onClick={() => setCloseBanner(true)}>
          <RiCloseLargeFill />
        </CloseBtn>
        <WebsiteLogo
          alt="Website Logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <PremiumText>Buy Nxt Watch Premium prepaid plans with UPI</PremiumText>
        <GetItNow>GET IT NOW</GetItNow>
      </BannerContainer>
    );
  };

  const renderDataContainer = () => {
    return (
      <DataContainer $darkTheme={darkTheme}>
        <SearchContainer>
          <SearchInput
            $darkTheme={darkTheme}
            type="search"
            placeholder="Search"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            onKeyDown={onClickEnter}
          />
          <SearchImgBtn onClick={getVideosData} $darkTheme={darkTheme}>
            <FaSearch />
          </SearchImgBtn>
        </SearchContainer>
        <VideoContainer $close={closeBanner}>{getVideosView()}</VideoContainer>
      </DataContainer>
    );
  };

  const getVideosData = async () => {
    console.log('apicalled');
    setApiStatus(apiConstants.inProgress);
    const jwtToken = Cookies.get('jwt_token');
    const url = `https://apis.ccbp.in/videos/all?search=${inputSearch}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      const { data } = response;

      const updatedData = data.videos.map((eachObj) => ({
        channel: {
          name: eachObj.channel.name,
          profileImageUrl: eachObj.channel.profile_image_url,
        },
        id: eachObj.id,
        publishedAt: eachObj.published_at,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
      }));

      setApiStatus(apiConstants.success);
      setVideosData(updatedData);
    } catch (error) {
      setApiStatus(apiConstants.failure);
    }
  };

  return (
    <DataDisplayContainer $darkTheme={darkTheme}>
      {renderBanner()}
      {renderDataContainer()}
    </DataDisplayContainer>
  );
};

export default Home;
