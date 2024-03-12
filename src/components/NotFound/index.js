import Header from '../Header'
import CartContext from '../../context/CartContext'

import {
  NotFoundContainer,
  ImageElement,
  HeadingElement,
  Description,
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
          <NotFoundContainer isDarkTheme={isDarkTheme}>
            <ImageElement src={imgUrl} alt="not-found" />
            <HeadingElement isDarkTheme={isDarkTheme}>
              Page not found
            </HeadingElement>
            <Description>
              We are sorry, the page you requested could not found
            </Description>
          </NotFoundContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default NotFound
