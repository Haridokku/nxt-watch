import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: Center;
  overflow-y: auto;
`
export const TrendingContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#f1f1f1')};
`
export const ImageContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#cbd5e1')};
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
`
export const PopupContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  @media screen and (min-width: 576px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
  }
`
export const PopupDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CrossButton = styled.button`
  outline: none;
  cursor: pointer;
  background: transparent;
  border: none;
  align-self: flex-end;
`
export const ImageElement = styled.img`
  width: 100px;
  height: 60px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 80px;
  }
`
export const Description = styled.p`
  font-size: 18px;
  color: '#181818';
  font-family: 'Roboto';
  font-weight: 400px;
`
export const GetButton = styled.button`
  background-color: transparent;
  color: #231f20;
  border: 1px solid #231f20;
  padding: 15px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
display:flex;
flex-direction:column:
justify-content:center;
align-items:center;
`
export const HeadingElement = styled.h1`
color:${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')}
font-weight:500;
font-size:25px;
`
export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 8px;
  padding: 10px;
  border: none;
  cursor: pointer;
`
export const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const ContentAndSideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
