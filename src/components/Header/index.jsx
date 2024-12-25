import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Popup from 'reactjs-popup';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaMoon } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { HiFire } from 'react-icons/hi';
import { SiYoutubegaming } from 'react-icons/si';
import { BiListPlus } from 'react-icons/bi';
import { GrSun } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import { themeState, activeButtonAtom } from '../../recoil_state';
import {
  LogoutBtn,
  ProfileImg,
  NavBar,
  NavContainer,
  NxtWatchLogo,
  NavListContainer,
  SmallDisplayContainer,
  LargeDisplayContainer,
  NavList,
  ListItem,
  MenuIconContainer,
  Text,
  SideNavBar,
  NavBtn,
  CloseBtn,
  PopupBtn,
  Modal,
  Heading,
  BtnContainer,
  SocialMediaContainer,
  SideHeading,
  SocialMediaImgContainer,
  SocialMediaImg,
  SocialMsg,
  NavSubContainer,
} from './styledComponent.js';
import { useRecoilState } from 'recoil';

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

const Header = () => {
  const [activeNavId, setActiveNavId] = useRecoilState(activeButtonAtom);
  const [darkTheme, changeTheme] = useRecoilState(themeState);
  const navigate = useNavigate();

  function onClickLogout() {
    Cookies.remove('jwt_token');
    navigate('/login', { replace: true });
  }

  return (
    <NavBar $darkTheme={darkTheme}>
      <NavContainer>
        <NxtWatchLogo
          alt="nxtwatch logo"
          src={
            darkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
        />
        <NavListContainer>
          <NavBtn
            $darkTheme={darkTheme}
            onClick={() => changeTheme(!darkTheme)}
          >
            {darkTheme ? <GrSun /> : <FaMoon />}
          </NavBtn>

          <SmallDisplayContainer>
            <Popup
              trigger={
                <NavBtn $darkTheme={darkTheme}>
                  <GiHamburgerMenu />
                </NavBtn>
              }
              modal
              position="left"
              on="click"
              mouseLeaveDelay={300}
              mouseEnterDelay={0}
              contentStyle={{ padding: '0px', border: 'none' }}
              arrow={false}
            >
              {(close) => (
                <SideNavBar $darkTheme={darkTheme}>
                  <CloseBtn $darkTheme={darkTheme} onClick={close}>
                    <IoMdClose />
                  </CloseBtn>
                  <NavSubContainer>
                    <NavList>
                      {navList.map((each) => (
                        <Link to={each.path} key={each.id}>
                          <ListItem
                            onClick={() => setActiveNavId(each.id)}
                            $isActive={each.id === activeNavId}
                            $darkTheme={darkTheme}
                          >
                            <MenuIconContainer
                              $isActive={each.id === activeNavId}
                              $darkTheme={darkTheme}
                            >
                              <each.icon />
                            </MenuIconContainer>

                            <Text
                              $darkTheme={darkTheme}
                              $isActive={each.id === activeNavId}
                            >
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
                  </NavSubContainer>
                </SideNavBar>
              )}
            </Popup>
            <Popup
              trigger={
                <NavBtn $darkTheme={darkTheme}>
                  <MdLogout />
                </NavBtn>
              }
              modal
              nested
            >
              {(close) => (
                <Modal $darkTheme={darkTheme}>
                  <Heading $darkTheme={darkTheme}>
                    Are you sure you want to logout?
                  </Heading>
                  <BtnContainer>
                    <PopupBtn
                      $border
                      $darkTheme={darkTheme}
                      onClick={() => {
                        console.log('modal closed ');
                        close();
                      }}
                    >
                      Cancel
                    </PopupBtn>
                    <PopupBtn onClick={() => onClickLogout()}>Confirm</PopupBtn>
                  </BtnContainer>
                </Modal>
              )}
            </Popup>
          </SmallDisplayContainer>
          <LargeDisplayContainer>
            <ProfileImg
              alt="profile"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            />
            <Popup
              trigger={
                <LogoutBtn
                  onClick={() => onClickLogout()}
                  $darkTheme={darkTheme}
                  type="button"
                >
                  Logout
                </LogoutBtn>
              }
              modal
              nested
            >
              {(close) => (
                <Modal $darkTheme={darkTheme}>
                  <Heading $darkTheme={darkTheme}>
                    Are you sure you want to logout?
                  </Heading>
                  <BtnContainer>
                    <PopupBtn
                      $border
                      $darkTheme={darkTheme}
                      onClick={() => {
                        close();
                      }}
                    >
                      Cancel
                    </PopupBtn>
                    <PopupBtn onClick={() => onClickLogout()}>Confirm</PopupBtn>
                  </BtnContainer>
                </Modal>
              )}
            </Popup>
          </LargeDisplayContainer>
        </NavListContainer>
      </NavContainer>
    </NavBar>
  );
};

export default Header;
