import { themeState } from '../../recoil_state';
import { useRecoilValue } from 'recoil';

import {
  FailedViewContainer,
  FailedViewImage,
  FailedViewHeading,
  FailedViewDesc,
  RetryBtn,
} from './styledComponent';

const FailureView = (props) => {
  const {
    onClickRetry = () => {},
    failedViewDetails = {},
    showRetryButton = true,
  } = props;
  const clickedRetry = () => {
    onClickRetry();
  };
  const darkTheme = useRecoilValue(themeState);
  const {
    failedAlt = 'failed view',
    darkThemeImgUrl = 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png',
    lightThemeImgUrl = 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png',
    heading = 'Oops! Something Went Wrong',
    description = 'We are having some trouble to complete your request. Please try again.',
  } = failedViewDetails;
  return (
    <FailedViewContainer>
      <FailedViewImage
        alt={failedAlt}
        src={darkTheme ? darkThemeImgUrl : lightThemeImgUrl}
      />
      <FailedViewHeading $darkTheme={darkTheme}>{heading}</FailedViewHeading>
      <FailedViewDesc $darkTheme={darkTheme}>{description}</FailedViewDesc>
      {showRetryButton && ( // Conditionally render the button
        <RetryBtn onClick={clickedRetry} type="button">
          Retry
        </RetryBtn>
      )}
    </FailedViewContainer>
  );
};

export default FailureView;
