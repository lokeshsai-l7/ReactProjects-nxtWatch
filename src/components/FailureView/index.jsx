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
  const { onClickRetry } = props;
  const clickedRetry = () => {
    onClickRetry();
  };
  const darkTheme = useRecoilValue(themeState);
  return (
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
      <RetryBtn onClick={clickedRetry} type="button">
        Retry
      </RetryBtn>
    </FailedViewContainer>
  );
};

export default FailureView;
