import {formatDistanceToNow} from 'date-fns'

import {
  StyledLink,
  VideoItemContainer,
  ProfileImage,
  HeadingElement,
  ImageElement,
  VideoDetailsContainer,
  ViewsDetails,
  UnorderedList,
  DescriptionWithListType,
  DescriptionWithListTypeNone,
  Describe,
} from './styledComponent'

const TrendingItem = props => {
  const {videoDetails} = props
  const {
    id,
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
  } = videoDetails
  const {profileImageUrl, name} = channel
  const formatTime = formatDistanceToNow(new Date(publishedAt))
  return (
    <>
      <VideoItemContainer>
        <StyledLink to={`/videos/${id}`}>
          <ImageElement src={thumbnailUrl} alt="video thumbnail" />
          <VideoDetailsContainer>
            <ProfileImage src={profileImageUrl} alt="profile" />
            <ViewsDetails>
              <HeadingElement>{title}</HeadingElement>
              <UnorderedList>
                <DescriptionWithListTypeNone>
                  <Describe>{name}</Describe>
                </DescriptionWithListTypeNone>
                <DescriptionWithListType>
                  <Describe>{viewCount}</Describe>
                </DescriptionWithListType>
                <DescriptionWithListType>
                  <Describe>{formatTime}</Describe>
                </DescriptionWithListType>
              </UnorderedList>
            </ViewsDetails>
          </VideoDetailsContainer>
        </StyledLink>
      </VideoItemContainer>
    </>
  )
}
export default TrendingItem
