import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%;
  background-color: ${(props) => (props.$darkTheme ? '#181818' : '#ffffff')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 20px 40px 20px 40px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NxtWatchLogo = styled.img`
  width: 110px;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;

export const NavListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

export const Menu = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${(props) => (props.$darkTheme ? '#231f20' : '#ffffff')};
`;

export const NavItem = styled.span`
  padding-left: 14px;
  &:hover {
    color: ${(props) => (props.$darkTheme ? '#f9f9f9' : '#1e293b')};
    font-weight: 600;
  }
`;

export const NavBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 30px;
  color: ${(props) => (props.$darkTheme ? '#f9f9f9' : '#000000')};
  &:hover {
    color: #2980b9;
  }
  cursor: pointer;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SmallDisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LargeDisplayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 66%;
  padding: 0px;
  margin: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProfileImg = styled(NxtWatchLogo)`
  width: 34px;
`;

export const LogoutBtn = styled(NavBtn)`
  border: 2px solid ${(props) => (props.$darkTheme ? '#f9f9f9' : '#3b82f6')};
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
  color: ${(props) => (props.$darkTheme ? '#f9f9f9' : '#3b82f6')};
  font-size: 20px;
  font-family: 'Roboto';
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  padding-top: 40px;
`;

export const ListItem = styled.li`
  padding: 10px 0px 10px 40px;
  background-color: ${(props) =>
    props.$isActive
      ? props.$darkTheme
        ? '#383838'
        : '#94a3b8'
      : 'transparent'};
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  font-size: 20px;
`;

export const MenuIconContainer = styled.div`
  color: ${(props) =>
    props.$isActive ? '#FC0A0A' : props.$darkTheme ? '#f1f1f1' : '#475569'};
`;

export const Text = styled.span`
  color: ${(props) =>
    props.$isActive
      ? props.$darkTheme
        ? '#ffffff'
        : '#1e293b'
      : props.$darkTheme
      ? '#f1f1f1'
      : '#475569'};
  padding-left: 15px;
  font-weight: ${(props) => (props.$isActive ? '600' : '500')};
`;

export const SideNavBar = styled.div`
  min-height: 100vh;
  background-color: ${(props) => (props.$darkTheme ? '#181818' : '#ffffff')};
  width: 100vw;
`;

export const CloseBtn = styled(NavBtn)`
  position: absolute;
  display: block;
  right: 10px;
  top: 10px;
`;

export const PopupBtn = styled(LogoutBtn)`
  background-color: ${(props) => (props.$border ? 'transparent' : '#3b82f6')};
  border: 2px solid
    ${(props) =>
      props.$border ? (props.$darkTheme ? '#f9f9f9' : '#00306e') : 'none'};
  color: ${(props) => (props.$border ? props.$btnclr : '#ffffff')};
`;

export const Modal = styled.div`
  background-color: ${(props) => (props.$darkTheme ? '#181818' : '#ffffff')};
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
`;

export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${(props) => (props.$darkTheme ? '#f9f9f9' : '#00306e')};
  margin-bottom: 40px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  color: ${(props) => (props.$darkTheme ? '#ffffff' : '#00306e')};
`;

export const SideHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
`;

export const SocialMediaImgContainer = styled(SocialMediaContainer)`
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SocialMediaImg = styled.img`
  width: 40px;
  margin-right: 20px;
`;

export const SocialMsg = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
`;

export const NavSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
