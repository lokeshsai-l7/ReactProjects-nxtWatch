import { formatDistanceToNow } from 'date-fns';
import {
  Card,
  ThumbnailImg,
  DetailsContainer,
  ChannelImg,
  ChannelDetails,
  Details,
  Title,
  Para,
} from './styledComponent';
import { themeState } from '../../recoil_state';
import { useRecoilValue } from 'recoil';

const VideoCard = (props) => {
  const { videoDetails } = props;
  const { darkTheme } = useRecoilValue(themeState);
  const { thumbnailUrl, channel, title, viewCount, publishedAt } = videoDetails;
  const date = formatDistanceToNow(new Date(publishedAt));

  return (
    <Card>
      <ThumbnailImg alt="Thumbnail" src={thumbnailUrl} />
      <DetailsContainer>
        <ChannelImg alt="channel" src={channel.profileImageUrl} />
        <ChannelDetails>
          <Title $darkTheme={darkTheme}>{title}</Title>
          <Details $darkTheme={darkTheme}>
            <Para>{channel.name}</Para>
            <Para>{viewCount} Views</Para>
            <Para>{date}</Para>
          </Details>
        </ChannelDetails>
      </DetailsContainer>
    </Card>
  );
};

export default VideoCard;
