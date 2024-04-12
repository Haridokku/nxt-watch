import {BsBrightnessHighFill} from 'react-icons/bs'
import {FaBars, FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'

import {
  NavbarContainer,
  NavContent,
  ImageElement,
  NavigationContainer,
  NavigationContainerForLargeDevices,
  LogoutButton,
  ThemeButton,
  PopupContainer,
  PopupElement,
  Heading,
  ButtonsContainer,
  CancelBtn,
  ConfirmBtn,
  LogoutButtonIcon,
  ProfileElement,
} from './styledComponent'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme, onChangeTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const changeTheme = () => {
        onChangeTheme()
      }

      const onLogoutFromWebsite = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onLogout = logBtn => (
        <PopupContainer>
          <Popup modal trigger={logBtn}>
            {close => (
              <PopupElement>
                <Heading>Are you sure, you want to logout</Heading>
                <ButtonsContainer>
                  <CancelBtn onClick={() => close()}>Cancel</CancelBtn>
                  <ConfirmBtn onClick={onLogoutFromWebsite}>Confirm</ConfirmBtn>
                </ButtonsContainer>
              </PopupElement>
            )}
          </Popup>
        </PopupContainer>
      )

      return (
        <>
          <NavbarContainer isDarkTheme={isDarkTheme}>
            <NavContent>
              <Link to="/">
                <ImageElement src={imgUrl} alt="website logo" />
              </Link>
              <NavigationContainer isDarkTheme={isDarkTheme}>
                {isDarkTheme ? (
                  <ThemeButton
                    type="button"
                    data-testid="theme"
                    onClick={changeTheme}
                  >
                    <BsBrightnessHighFill size={30} />
                  </ThemeButton>
                ) : (
                  <ThemeButton
                    type="button"
                    data-testid="theme"
                    onClick={changeTheme}
                  >
                    <FaMoon size={30} />
                  </ThemeButton>
                )}
                <FaBars size={40} color="#4f46e5" />

                {onLogout(
                  <LogoutButtonIcon type="button">
                    <FiLogOut size={30} />
                  </LogoutButtonIcon>,
                )}
              </NavigationContainer>
              <NavigationContainerForLargeDevices isDarkTheme={isDarkTheme}>
                {isDarkTheme ? (
                  <ThemeButton
                    type="button"
                    data-testid="theme"
                    onClick={changeTheme}
                  >
                    <BsBrightnessHighFill size={20} />
                  </ThemeButton>
                ) : (
                  <ThemeButton
                    type="button"
                    data-testid="theme"
                    onClick={changeTheme}
                  >
                    <FaMoon size={50} />
                  </ThemeButton>
                )}

                <ProfileElement
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                {onLogout(
                  <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                    Logout
                  </LogoutButton>,
                )}
              </NavigationContainerForLargeDevices>
            </NavContent>
          </NavbarContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(Header)
