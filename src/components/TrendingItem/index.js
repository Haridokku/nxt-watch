import {formatDistanceToNow} from 'date-fns'

import {
  VideoItemContainer,
  ProfileImage,
  ImageElement,
  VideoDetailsContainer,
  ViewsDetails,
  Description,
  UnorderedList,
  DescriptionWithListType,
  DescriptionWithListTypeNone,
} from '../VideoItem/styledComponent'

const TrendingItem = props => {
  const {videoDetails} = props
  const {thumbnailUrl, channel, title, viewCount, publishedAt} = videoDetails
  const {profileImageUrl, name} = channel
  const formatTime = formatDistanceToNow(new Date(publishedAt))
  return (
    <>
      <VideoItemContainer>
        <ImageElement src={thumbnailUrl} alt="video" />
        <VideoDetailsContainer>
          <ProfileImage src={profileImageUrl} alt="profile" />
          <ViewsDetails>
            <Description>{title}</Description>
            <UnorderedList>
              <DescriptionWithListTypeNone>{name}</DescriptionWithListTypeNone>
              <DescriptionWithListType>{viewCount}</DescriptionWithListType>
              <Description>{formatTime}</Description>
            </UnorderedList>
          </ViewsDetails>
        </VideoDetailsContainer>
      </VideoItemContainer>
    </>
  )
}
export default TrendingItem
