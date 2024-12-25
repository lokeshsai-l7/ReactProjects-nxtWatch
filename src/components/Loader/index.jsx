import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './styledComponent';

const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  );
};

export default Loader;
