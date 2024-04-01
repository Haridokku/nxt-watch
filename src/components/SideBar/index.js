import {MdHome} from 'react-icons/md'
import {FiSave} from 'react-icons/fi'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import CartContext from '../../context/CartContext'

import {
  StyledLink,
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
                <StyledLink to="/">
                  <ListItem>
                    <MdHome />
                    <Describe>Home</Describe>
                  </ListItem>
                </StyledLink>

                <StyledLink to="/trending">
                  <ListItem>
                    <HiFire />
                    <Describe>Trending</Describe>
                  </ListItem>
                </StyledLink>

                <StyledLink to="/gaming">
                  <ListItem>
                    <SiYoutubegaming />
                    <Describe>Gaming</Describe>
                  </ListItem>
                </StyledLink>

                <StyledLink to="/saved-videos">
                  <ListItem>
                    <FiSave />
                    <Describe>Saved Videos</Describe>
                  </ListItem>
                </StyledLink>
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
                  alt="linked in logo"
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
