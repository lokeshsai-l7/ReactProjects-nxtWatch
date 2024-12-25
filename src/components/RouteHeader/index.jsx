import {
  RouteHeaderContainer,
  RouteLogoContainer,
  RouteHeading,
} from './styledComponent';
import { themeState } from '../../recoil_state';
import { useRecoilValue } from 'recoil';

const RouteHeader = (props) => {
  const { icon, name } = props;
  const darkTheme = useRecoilValue(themeState);
  return (
    <RouteHeaderContainer $darkTheme={darkTheme}>
      <RouteLogoContainer $darkTheme={darkTheme}>{icon}</RouteLogoContainer>
      <RouteHeading $darkTheme={darkTheme}>{name}</RouteHeading>
    </RouteHeaderContainer>
  );
};

export default RouteHeader;
