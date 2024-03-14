import {HiMiniFire} from 'react-icons/hi2'
import CartContext from '../../context/CartContext'
import Header from '../Header'
import TrendingItem from '../TrendingItem'

import {
  SavedListContainer,
  TrendingContainer,
  ImageContainer,
  HeadingElement,
  UnorderedList,
  ImageElement,
  Description,
} from './styledComponent'

const SavedVideos = () => (
  <CartContext.Consumer>
    {value => {
      const {savedList, isDarkTheme} = value

      return (
        <>
          <Header />
          <SavedListContainer isDarkTheme={isDarkTheme}>
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
                    <HiMiniFire size={20} />
                  </ImageContainer>
                  <HeadingElement>Saved Videos</HeadingElement>
                </TrendingContainer>
                <UnorderedList>
                  {savedList.map(each => (
                    <TrendingItem key={each.id} videoDetails={each} />
                  ))}
                </UnorderedList>
              </>
            )}
          </SavedListContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default SavedVideos