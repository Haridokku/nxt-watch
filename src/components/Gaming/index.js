import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import CartContext from '../../context/CartContext'
import GamingItem from '../GamingItem'
import SideBar from '../SideBar'

import {
  HomeContainer,
  ImageElement,
  Description,
  LoaderContainer,
  FailureContainer,
  HeadingElement,
  RetryButton,
  UnorderedList,
  TrendingContainer,
  ImageContainer,
  ContentAndSideBar,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.renderApiCall()
  }

  renderApiCall = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        videosList: updatedData,
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
            <Description>We are having some trouble</Description>
            <RetryButton type="button" onClick={onRetryApi}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <>
        <UnorderedList>
          {videosList.map(each => (
            <GamingItem key={each.id} videoDetails={each} />
          ))}
        </UnorderedList>
      </>
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.in_progress:
        return this.renderInprogressView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
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
                <HomeContainer isDarkTheme={isDarkTheme} data-testid="gaming">
                  <TrendingContainer>
                    <ImageContainer>
                      <SiYoutubegaming size={20} color="#ff0000" />
                    </ImageContainer>
                    <HeadingElement>Gaming</HeadingElement>
                  </TrendingContainer>
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

export default Gaming
