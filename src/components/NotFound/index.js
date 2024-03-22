import Header from '../Header'
import CartContext from '../../context/CartContext'
import SideBar from '../SideBar'

import {
  NotFoundContainer,
  ImageElement,
  HeadingElement,
  Description,
  ContentAndSideBar,
} from './styledComponent'

const NotFound = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <ContentAndSideBar>
            <SideBar />
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              <ImageElement src={imgUrl} alt="not found" />
              <HeadingElement isDarkTheme={isDarkTheme}>
                Page not found
              </HeadingElement>
              <Description>
                we are sorry, the page you requested could not be found.
              </Description>
            </NotFoundContainer>
          </ContentAndSideBar>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default NotFound
