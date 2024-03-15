import {MdLightMode} from 'react-icons/md'
import {FaBars, FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import CartContext from '../../context/CartContext'

import {
  NavbarContainer,
  NavContent,
  ImageElement,
  NavigationContainer,
  NavigationContainerForLargeDevices,
  LogoutButton,
  ThemeButton,
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
              <ImageElement src={imgUrl} alt="website logo" />
              <NavigationContainer isDarkTheme={isDarkTheme}>
                {isDarkTheme ? (
                  <ThemeButton type="button" data-testid="theme">
                    <MdLightMode size={20} />
                  </ThemeButton>
                ) : (
                  <ThemeButton type="button" data-testid="theme">
                    <FaMoon size={50} />
                  </ThemeButton>
                )}
                <FaBars size={20} />
                <LogoutButton type="button" onClick={changeTheme}>
                  <FiLogOut size={20} />
                </LogoutButton>
              </NavigationContainer>
              <NavigationContainerForLargeDevices isDarkTheme={isDarkTheme}>
                {isDarkTheme ? (
                  <ThemeButton type="button" data-testid="theme">
                    <MdLightMode size={20} />
                  </ThemeButton>
                ) : (
                  <ThemeButton type="button" data-testid="theme">
                    <FaMoon size={50} />
                  </ThemeButton>
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
