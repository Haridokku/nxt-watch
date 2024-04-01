import {formatDistanceToNow} from 'date-fns'

import {
  StyledLink,
  ListItemDetails,
  ImageElement,
  ContentDetails,
  ProfileImage,
  VideoDescription,
  HeadingElement,
  ViewsDetails,
  Description,
  UnorderedList,
  ListItem,
  DescriptionWithListType,
} from './styledComponent'

const VideoItem = props => {
  const {details} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = details
  const {profileImageUrl, name} = channel
  const formatTime = formatDistanceToNow(new Date(publishedAt))
  return (
    <ListItemDetails>
      <StyledLink to={`/videos/${id}`}>
        <ImageElement src={thumbnailUrl} alt="video thumbnail" />
        <ContentDetails>
          <ProfileImage src={profileImageUrl} alt="channel logo" />
          <VideoDescription>
            <HeadingElement>{title}</HeadingElement>
            <ViewsDetails>
              <Description>{name}</Description>
              <UnorderedList>
                <ListItem>
                  <DescriptionWithListType>{viewCount}</DescriptionWithListType>
                </ListItem>
                <ListItem>
                  <Description>{formatTime}</Description>
                </ListItem>
              </UnorderedList>
            </ViewsDetails>
          </VideoDescription>
        </ContentDetails>
      </StyledLink>
    </ListItemDetails>
  )
}

export default VideoItem
