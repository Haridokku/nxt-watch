import CartContext from '../../context/CartContext'
import {
  StyledLink,
  ListItem,
  GamingItemContainer,
  ImageElement,
  HeadingItem,
  Description,
} from './styledComponent'

const GamingItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <StyledLink to={`/videos/${id}`}>
      <ListItem>
        <CartContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <GamingItemContainer>
                <ImageElement src={thumbnailUrl} alt="video thumbnail" />
                <HeadingItem isDarkTheme={isDarkTheme}>{title}</HeadingItem>
                <Description
                  isDarkTheme={isDarkTheme}
                >{`${viewCount} Watching Worldwide`}</Description>
              </GamingItemContainer>
            )
          }}
        </CartContext.Consumer>
      </ListItem>
    </StyledLink>
  )
}

export default GamingItem
