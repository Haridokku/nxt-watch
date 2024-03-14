import CartContext from '../../context/CartContext'
import {
  GamingItemContainer,
  ImageElement,
  HeadingItem,
  Description,
} from './styledComponent'

const GamingItem = props => {
  const {videoDetails} = props
  const {title, thumbnailUrl, viewCount} = videoDetails
  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingItemContainer>
            <ImageElement src={thumbnailUrl} alt={title} />
            <HeadingItem isDarkTheme={isDarkTheme}>{title}</HeadingItem>
            <Description
              isDarkTheme={isDarkTheme}
            >{`${viewCount} Watching Worldwide`}</Description>
          </GamingItemContainer>
        )
      }}
    </CartContext.Consumer>
  )
}

export default GamingItem
