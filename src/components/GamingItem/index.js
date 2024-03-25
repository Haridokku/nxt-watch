import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import {
  GamingItemContainer,
  ImageElement,
  HeadingItem,
  Description,
} from './styledComponent'

const GamingItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <Link to={`/videos/${id}`}>
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
    </Link>
  )
}

export default GamingItem
