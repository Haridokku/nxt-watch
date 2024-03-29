import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  ListItemDetails,
  ImageElement,
  ContentDetails,
  ProfileImage,
  VideoDescription,
  HeadingElement,
  ViewsDetails,
  Description,
  UnorderedList,
  DescriptionWithListType,
} from './styledComponent'

const VideoItem = props => {
  const {details} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = details
  const {profileImageUrl, name} = channel
  const formatTime = formatDistanceToNow(new Date(publishedAt))
  return (
    <ListItemDetails>
      <Link to={`/videos/${id}`}>
        <ImageElement src={thumbnailUrl} alt="video thumbnail" />
        <ContentDetails>
          <ProfileImage src={profileImageUrl} alt={name} />
          <VideoDescription>
            <HeadingElement>{title}</HeadingElement>
            <ViewsDetails>
              <Description>{name}</Description>
              <UnorderedList>
                <DescriptionWithListType>{viewCount}</DescriptionWithListType>
                <Description>{formatTime}</Description>
              </UnorderedList>
            </ViewsDetails>
          </VideoDescription>
        </ContentDetails>
      </Link>
    </ListItemDetails>
  )
}

export default VideoItem
