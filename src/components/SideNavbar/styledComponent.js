import styled from 'styled-components';

export const SideNavBar = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
  width: 20%;
  height: 100%;
  background-color: ${(props) => (props.$darkTheme ? '#181818' : '#ffffff')};
  padding: 30px 0px 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`;

export const ListItem = styled.li`
  padding: 10px 10px 10px 40px;
  background-color: ${(props) =>
    props.$isActive ? props.$bgColor : 'transparent'};
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  font-size: 20px;
`;

export const IconContainer = styled.div`
  color: ${(props) => (props.$isActive ? '#FC0A0A' : props.$unselectedColor)};
`;

export const Text = styled.span`
  color: ${(props) =>
    props.$isActive ? props.$selectedColor : props.$unSelectedColor};
  padding-left: 15px;
  font-weight: ${(props) => (props.$isActive ? '600' : '500')};
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
