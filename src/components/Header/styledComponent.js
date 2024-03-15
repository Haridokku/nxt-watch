import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  background-color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`
export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavigationContainerForLargeDevices = styled.div`
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
  @media screen and (max-width: 768px) {
    border: none;
  }
`
export const ThemeButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
`
