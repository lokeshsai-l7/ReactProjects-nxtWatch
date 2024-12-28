import { themeState, savedVideosAtom } from '../../recoil_state';
import { useRecoilValue } from 'recoil';
import { BiListPlus } from 'react-icons/bi';
import RouteHeader from '../RouteHeader';
import styled from 'styled-components';
import SavedVideosCard from '../SavedVideosCard';

const SavedVideos = () => {
  const darkTheme = useRecoilValue(themeState);
  const savedVideosList = useRecoilValue(savedVideosAtom);
  console.log(savedVideosList);

  const renderNoVideos = () => (
    <NoVideosContainer>
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoVideosHead $darkTheme={darkTheme}>No saved videos found</NoVideosHead>
      <NoVideosDes $darkTheme={darkTheme}>
        You can save your videos while watching them
      </NoVideosDes>
    </NoVideosContainer>
  );

  const renderSavedVideos = () => (
    <>
      <RouteHeader icon={<BiListPlus />} name="Saved Videos" />
      <VideosList>
        {savedVideosList.map((eachObj) => (
          <SavedVideosCard key={eachObj.id} videoDetails={eachObj} />
        ))}
      </VideosList>
    </>
  );

  return (
    <SavedVideosContainer $darkTheme={darkTheme}>
      {savedVideosList.length > 0 ? renderSavedVideos() : renderNoVideos()}
    </SavedVideosContainer>
  );
};

export default SavedVideos;
//{SavedVideosContainer, NoVideosContainer, NoVideosImg, NoVideosHead, NoVideosDes}
const SavedVideosContainer = styled.div`
  height: 90vh;
  background-color: ${(props) => (props.$darkTheme ? '#000000' : '#f1f1f1')};
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
`;

const NoVideosContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoVideosImg = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

const NoVideosHead = styled.h1`
  color: ${(props) => (props.$darkTheme ? '#f9f9f9' : '#231f20')};
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  font-size: 20px;
  font-family: 'Roboto';
`;

const NoVideosDes = styled.p`
  color: ${(props) => (props.$darkTheme ? '#ebebeb' : '#606060')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  font-size: 16px;
  font-family: 'Roboto';
`;

export const VideosList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`;
