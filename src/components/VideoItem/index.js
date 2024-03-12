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
  const {eachDetails} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt} = eachDetails
  const {profileImageUrl, name} = channel
  const formatTime = formatDistanceToNow(new Date(publishedAt))
  return (
    <ListItemDetails>
      <ImageElement src={thumbnailUrl} alt={title} />
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
    </ListItemDetails>
  )
}

export default VideoItem
