import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  background-color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
  display: flex;
  align-items: center;
  height: 20vh;
`
export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 20px;
`
export const ImageElement = styled.img`
  width: 150px;
  height: 80px;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 100px;
  }
`
export const NavigationContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavigationContainerForLargeDevices = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  outline: none;
  cursor: pointer;
  padding: 8px 16px 8px 16px;
  @media screen and (max-width: 768px) {
    border: none;
  }
`
export const LogoutButtonIcon = styled.button`
  border: none;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`
export const PopupContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
`
export const PopupElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.p`
  color: #231f20;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CancelBtn = styled.button`
  background-color: transparent;
  color: #909090;
  border: 1px solid #909090;
  padding: 10px;
`
export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  padding: 10px;
`
export const ProfileElement = styled.img`
  width: 60px;
  height: 60px;
`
