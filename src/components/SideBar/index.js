import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {MdHome} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {FiSave} from 'react-icons/fi'
import CartContext from '../../context/CartContext'

import {
  PopupAndContactDetails,
  PopupContainer,
  PopupElement,
  ButtonElement,
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
            <PopupContainer isDarkTheme={isDarkTheme}>
              <Popup modal open={true}>
                {close => (
                  <>
                    <PopupElement>
                      <ButtonElement onClick={() => close()}>
                        <FilLogOut size={20} />
                      </ButtonElement>
                      <UnorderedList>
                        <ListItem>
                          <Link to="/">
                            <MdHome />
                            <Describe>Home</Describe>
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link to="/trending">
                            <HiFire />
                            <Describe>Trending</Describe>
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link to="/gaming">
                            <SiYoutubegaming />
                            <Describe>Gaming</Describe>
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link to="/save">
                            <FiSave />
                            <Describe>Saved Videos</Describe>
                          </Link>
                        </ListItem>
                      </UnorderedList>
                    </PopupElement>
                  </>
                )}
              </Popup>
            </PopupContainer>
            <ContactDetails>
              <HeadingElement>CONTACT US</HeadingElement>
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
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linkedIn-logo-img.png"
                  alt="linkedIn logo"
                />
              </IconsContainer>
              <HeadingElement>
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
