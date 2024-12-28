import { Link } from 'react-router-dom';
import { ThumbnailImg, Card, Title, ViewCount } from './styledComponent';
import { themeState } from '../../recoil_state.js';
import { useRecoilValue } from 'recoil';

const GameCard = (props) => {
  const darkTheme = useRecoilValue(themeState);
  const { videoData } = props;
  const { thumbnailUrl, title, viewCount, id } = videoData;
  return (
    <Link to={`/videos/${id}`}>
      <Card>
        <ThumbnailImg alt={title} src={thumbnailUrl} />
        <Title $darkTheme={darkTheme}>{title}</Title>
        <ViewCount $darkTheme={darkTheme}>
          {viewCount} Watching Worldwide
        </ViewCount>
      </Card>
    </Link>
  );
};

export default GameCard;
