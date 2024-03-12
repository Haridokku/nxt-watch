import {MdDarkMode, MdOutlineLightMode} from 'react-icons/md'
import {FaBars} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import CartContext from '../../context/CartContext'

import {
  NavbarContainer,
  NavContent,
  ImageElement,
  NavigationContainer,
  NavigationContainerForLargeDevices,
  LogoutButton,
} from './styledComponent'

const Header = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme, onChangeTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const changeTheme = () => {
        onChangeTheme()
      }

      return (
        <>
          <NavbarContainer isDarkTheme={isDarkTheme}>
            <NavContent>
              <ImageElement src={imgUrl} alt="nxtWatch" />
              <NavigationContainer isDarkTheme={isDarkTheme}>
                {isDarkTheme ? (
                  <MdOutlineLightMode size={20} />
                ) : (
                  <MdDarkMode size={50} />
                )}
                <FaBars size={20} />
                <LogoutButton type="button" onClick={changeTheme}>
                  <FiLogOut size={20} />
                </LogoutButton>
              </NavigationContainer>
              <NavigationContainerForLargeDevices isDarkTheme={isDarkTheme}>
                {isDarkTheme ? (
                  <MdOutlineLightMode size={20} />
                ) : (
                  <MdDarkMode size={50} />
                )}
                <ImageElement
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <LogoutButton
                  type="button"
                  isDarkTheme={isDarkTheme}
                  onClick={changeTheme}
                >
                  Logout
                </LogoutButton>
              </NavigationContainerForLargeDevices>
            </NavContent>
          </NavbarContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Header
