import { Link } from 'react-router-dom';
import { ThumbnailImg, Card, Title, ViewCount } from './styledComponent';

const GameCard = (props) => {
  const { videoData } = props;
  const { thumbnailUrl, title, viewCount, id } = videoData;
  return (
    <Link to={`/videos/${id}`}>
      <Card>
        <ThumbnailImg alt={title} src={thumbnailUrl} />
        <Title>{title}</Title>
        <ViewCount>{viewCount} Watching Worldwide</ViewCount>
      </Card>
    </Link>
  );
};

export default GameCard;
