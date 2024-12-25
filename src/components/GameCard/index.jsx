import { ThumbnailImg, Card, Title, ViewCount } from './styledComponent';

const GameCard = (props) => {
  const { videoData } = props;
  const { thumbnailUrl, title, viewCount, id } = videoData;
  return (
    <Card key={id}>
      <ThumbnailImg alt={title} src={thumbnailUrl} />
      <Title>{title}</Title>
      <ViewCount>{viewCount} Watching Worldwide</ViewCount>
    </Card>
  );
};

export default GameCard;
