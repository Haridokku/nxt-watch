import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {FiSave} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Header from '../Header'
import CartContext from '../../context/CartContext'
import SideBar from '../SideBar'
import {
  ImageElement,
  Description,
  LoaderContainer,
  FailureContainer,
  HeadingElement,
  RetryButton,
  UnorderedList,
  DescriptionListTypeNone,
  SuccessContainer,
  DetailsContainer,
  Heading2,
  ListAndLikesContainer,
  LikesAndSaveContainer,
  LikeContainer,
  Text,
  TextDisLike,
  HorizontalLine,
  ProfileContainer,
  ProfileImage,
  ProfileDetails,
  DescriptionDetails,
  LikeButton,
  DisLikeButton,
  ContentAndSideBar,
  HomeContainer,
  SaveBtn,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class VideoItemDetails extends Component {
  state = {
    videoObject: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.renderVideoDetails()
  }

  renderVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const responseObject = data.video_details
      const updatedObject = {
        id: responseObject.id,
        title: responseObject.title,
        videoUrl: responseObject.video_url,
        thumbnailUrl: responseObject.thumbnail_url,
        channel: {
          name: responseObject.channel.name,
          profileImageUrl: responseObject.channel.profile_image_url,
          subscriberCount: responseObject.channel.subscriber_count,
        },
        viewCount: responseObject.view_count,
        publishedAt: responseObject.published_at,
        description: responseObject.description,
      }
      this.setState({
        videoObject: updatedObject,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderInprogressView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const imgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const onRetryApi = () => {
          this.renderApiCall()
        }
        return (
          <FailureContainer isDarkTheme={isDarkTheme}>
            <ImageElement src={imgUrl} alt="failure view" />
            <HeadingElement>Oops! Something Went Wrong</HeadingElement>
            <Description>
              We are having trouble to complete your request. Please try again
            </Description>
            <RetryButton type="button" onClick={onRetryApi}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderSuccessView = () => {
    const {videoObject, isLiked} = this.state
    const {
      videoUrl,
      title,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoObject
    const {name, profileImageUrl, subscriberCount} = channel
    const formattedTime = formatDistanceToNow(new Date(publishedAt))

    return (
      <CartContext.Consumer>
        {value => {
          const {moveToSaveList, isDarkTheme} = value
          const changeToSaveList = () => {
            this.setState(prevState => ({isSaved: !prevState.isSaved}))
            moveToSaveList(videoObject)
          }
          const changeLikeStatus = () => {
            this.setState(prevState => ({isLiked: !prevState.isLiked}))
          }
          const changeDislike = () => {
            this.setState(prevState => ({
              isDislike: !prevState.isDislike,
              isLiked: !prevState.isLiked,
            }))
          }

          const saveText = isSaved ? 'Saved' : 'Save'
          return (
            <SuccessContainer isDarkTheme={isDarkTheme}>
              <ReactPlayer url={videoUrl} controls />
              <HeadingElement isDarkTheme={isDarkTheme}>{title}</HeadingElement>
              <DetailsContainer>
                <ListAndLikesContainer>
                  <UnorderedList>
                    <DescriptionListTypeNone>
                      {viewCount}
                    </DescriptionListTypeNone>
                    <Description>{formattedTime}</Description>
                  </UnorderedList>
                  <LikesAndSaveContainer>
                    <LikeContainer>
                      <LikeButton
                        type="button"
                        onClick={changeLikeStatus}
                        isLiked={isLiked}
                      >
                        <AiOutlineLike size={20} />
                        <Text isLiked={isLiked}>Like</Text>
                      </LikeButton>
                    </LikeContainer>
                    <LikeContainer>
                      <DisLikeButton
                        type="button"
                        onClick={changeDislike}
                        isLiked={isLiked}
                      >
                        <BiDislike size={20} />
                        <TextDisLike isLiked={isLiked}>Dislike</TextDisLike>
                      </DisLikeButton>
                    </LikeContainer>
                    <LikeContainer>
                      <SaveBtn type="button" onClick={changeToSaveList}>
                        <FiSave size={20} />
                        <Text>{saveText}</Text>
                      </SaveBtn>
                    </LikeContainer>
                  </LikesAndSaveContainer>
                </ListAndLikesContainer>
                <HorizontalLine />
                <ProfileContainer>
                  <ProfileImage src={profileImageUrl} alt={name} />
                  <ProfileDetails>
                    <Heading2>{name}</Heading2>
                    <DescriptionDetails>{`${subscriberCount} subscribers`}</DescriptionDetails>
                    <DescriptionDetails>{description}</DescriptionDetails>
                  </ProfileDetails>
                </ProfileContainer>
              </DetailsContainer>
            </SuccessContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.in_progress:
        return this.renderInprogressView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <ContentAndSideBar>
                <SideBar />
                <HomeContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="videoItemDetails"
                >
                  {this.renderApiStatus()}
                </HomeContainer>
              </ContentAndSideBar>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default VideoItemDetails
