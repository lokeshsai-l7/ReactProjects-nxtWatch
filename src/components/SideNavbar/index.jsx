import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { HiFire } from 'react-icons/hi';
import { SiYoutubegaming } from 'react-icons/si';
import { BiListPlus } from 'react-icons/bi';
import {
  SideNavBar,
  NavList,
  ListItem,
  IconContainer,
  Text,
  SocialMediaContainer,
  SideHeading,
  SocialMediaImgContainer,
  SocialMediaImg,
  SocialMsg,
} from './styledComponent.js';
import { themeState, activeButtonAtom } from '../../recoil_state';
import { useRecoilValue, useRecoilState } from 'recoil';

const navList = [
  {
    id: 'HOME',
    displayText: 'Home',
    icon: AiFillHome,
    path: '/',
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    icon: SiYoutubegaming,
    path: '/gaming',
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    icon: HiFire,
    path: '/trending',
  },
  {
    id: 'SAVEDVIDEOS',
    displayText: 'Saved Videos',
    icon: BiListPlus,
    path: '/savedvideos',
  },
];

const SideNavbar = () => {
  const darkTheme = useRecoilValue(themeState);
  const [activeNavId, setActiveNavId] = useRecoilState(activeButtonAtom);

  return (
    <SideNavBar $darkTheme={darkTheme}>
      <NavList>
        {navList.map((each) => (
          <Link to={each.path} key={each.id}>
            <ListItem
              onClick={() => setActiveNavId(each.id)}
              $isActive={each.id === activeNavId}
              $darkTheme={darkTheme}
            >
              <IconContainer
                $isActive={each.id === activeNavId}
                $darkTheme={darkTheme}
              >
                <each.icon />
              </IconContainer>

              <Text $darkTheme={darkTheme} $isActive={each.id === activeNavId}>
                {each.displayText}
              </Text>
            </ListItem>
          </Link>
        ))}
      </NavList>
      <SocialMediaContainer $darkTheme={darkTheme}>
        <SideHeading>Contact Us</SideHeading>
        <SocialMediaImgContainer>
          <SocialMediaImg
            alt="facebook logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          />
          <SocialMediaImg
            alt="twitter logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          />
          <SocialMediaImg
            alt="linked in logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          />
        </SocialMediaImgContainer>
        <SocialMsg>
          Enjoy! Now to see your channels and recommendations!
        </SocialMsg>
      </SocialMediaContainer>
    </SideNavBar>
  );
};

export default SideNavbar;
