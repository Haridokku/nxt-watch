import {Link} from 'react-router-dom'

import {MdHome} from 'react-icons/md'
import {FiSave} from 'react-icons/fi'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import CartContext from '../../context/CartContext'

import {
  PopupAndContactDetails,
  HeaderDetails,
  UnorderedList,
  ListItem,
  Describe,
  ContactDetails,
  HeadingElement,
  IconsContainer,
  ImageElement,
} from './styledComponent'

const SideBar = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <PopupAndContactDetails>
            <HeaderDetails>
              <UnorderedList>
                <Link to="/">
                  <ListItem>
                    <MdHome />
                    <Describe>Home</Describe>
                  </ListItem>
                </Link>

                <Link to="/trending">
                  <ListItem>
                    <HiFire />
                    <Describe>Trending</Describe>
                  </ListItem>
                </Link>

                <Link to="/gaming">
                  <ListItem>
                    <SiYoutubegaming />
                    <Describe>Gaming</Describe>
                  </ListItem>
                </Link>

                <Link to="/saved-videos">
                  <ListItem>
                    <FiSave />
                    <Describe>Saved Videos</Describe>
                  </ListItem>
                </Link>
              </UnorderedList>
            </HeaderDetails>
            <ContactDetails>
              <HeadingElement isDarkTheme={isDarkTheme}>
                CONTACT US
              </HeadingElement>
              <IconsContainer>
                <ImageElement
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ImageElement
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ImageElement
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linkedIn logo"
                />
              </IconsContainer>
              <HeadingElement isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </HeadingElement>
            </ContactDetails>
          </PopupAndContactDetails>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default SideBar
