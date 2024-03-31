import {AiFillFire} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import Header from '../Header'
import TrendingItem from '../TrendingItem'
import SideBar from '../SideBar'

import {
  SavedListContainer,
  TrendingContainer,
  ImageContainer,
  HeadingElement,
  UnorderedList,
  ImageElement,
  Description,
  ContentAndSideBar,
} from './styledComponent'

const SavedVideos = () => (
  <CartContext.Consumer>
    {value => {
      const {savedList, isDarkTheme} = value

      return (
        <>
          <Header />
          <ContentAndSideBar>
            <SideBar />
            <SavedListContainer
              isDarkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
              {savedList.length === 0 ? (
                <>
                  <ImageElement
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <HeadingElement isDarkTheme={isDarkTheme}>
                    No saved videos found
                  </HeadingElement>
                  <Description isDarkTheme={isDarkTheme}>
                    You can save your videos while watching them
                  </Description>
                </>
              ) : (
                <>
                  <TrendingContainer isDarkTheme={isDarkTheme}>
                    <ImageContainer isDarkTheme={isDarkTheme}>
                      <AiFillFire size={20} />
                    </ImageContainer>
                    <HeadingElement isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </HeadingElement>
                  </TrendingContainer>
                  <UnorderedList>
                    {savedList.map(each => (
                      <TrendingItem key={each.id} videoDetails={each} />
                    ))}
                  </UnorderedList>
                </>
              )}
            </SavedListContainer>
          </ContentAndSideBar>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default SavedVideos
