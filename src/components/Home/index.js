import {Component} from 'react'
import Popup from 'reactjs-popup'

import {BsX} from 'react-icons/bs'
import {IoIosSearch} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import CartContext from '../../context/CartContext'
import VideoItem from '../VideoItem'
import SideBar from '../SideBar'

import {
  HomeContainer,
  PopupContainer,
  PopupAndChannelContainer,
  PopupDetails,
  CrossButton,
  ImageElement,
  Description,
  GetButton,
  ChannelImage,
  LoaderContainer,
  SearchContainer,
  InputElement,
  FailureContainer,
  HeadingElement,
  RetryButton,
  UnorderedList,
  ContentAndSideBar,
  ContentAndPopUp,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchValue: '',
  }

  componentDidMount() {
    this.renderApiCall()
  }

  renderApiCall = async () => {
    this.setState({apiStatus: apiStatusConstants.in_progress})
    const {searchValue} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      console.log(updatedData)
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    this.setState({apiStatus: apiStatusConstants.failure})
  }

  renderPopupDetails = () => (
    <PopupContainer data-testid="banner">
      <Popup modal open>
        {close => (
          <PopupAndChannelContainer>
            <PopupDetails>
              <CrossButton
                type="button"
                onClick={() => close()}
                data-testid="close"
              >
                <BsX size={20} />
              </CrossButton>
              <ImageElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <Description>
                Buy Nxt Watch Premium prepaid plan with UPI
              </Description>
              <GetButton type="button">GET IT NOW</GetButton>
            </PopupDetails>
            <ChannelImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
              alt="channel logo"
            />
          </PopupAndChannelContainer>
        )}
      </Popup>
    </PopupContainer>
  )

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

  renderNoResultsView = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const onRetryApi = () => {
          this.renderApiCall()
        }
        return (
          <FailureContainer>
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <HeadingElement isDarkTheme={isDarkTheme}>
              No Search results found
            </HeadingElement>
            <Description>
              Try different key words or remove search filters
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
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderNoResultsView()
    }
    return (
      <UnorderedList>
        {videosList.map(each => (
          <VideoItem key={each.id} videoDetails={each} />
        ))}
      </UnorderedList>
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

  onChangeInputValue = event => {
    this.setState({searchValue: event.target.value}, this.renderApiCall)
  }

  render() {
    const {searchValue} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <ContentAndSideBar>
                <SideBar />
                <ContentAndPopUp>
                  {this.renderPopupDetails()}
                  <HomeContainer isDarkTheme={isDarkTheme} data-testid="home">
                    <SearchContainer>
                      <InputElement
                        type="text"
                        value={searchValue}
                        isDarkTheme={isDarkTheme}
                        placeHolder="search"
                        onChange={this.onChangeInputValue}
                      />
                      <CrossButton type="button" data-testid="searchButton">
                        <IoIosSearch size={20} />
                      </CrossButton>
                    </SearchContainer>
                    {this.renderApiStatus()}
                  </HomeContainer>
                </ContentAndPopUp>
              </ContentAndSideBar>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Home
