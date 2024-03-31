import styled from 'styled-components'

export const SavedListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const TrendingContainer = styled.div`
  height: 100px;
  width: 60vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
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
  margin-right: 30px;
`
export const HeadingElement = styled.h1`
color:${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')}
font-weight:500;
font-size:25px;
`
export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageElement = styled.img`
  width: 300px;
  height: 300px;
`
export const Description = styled.p`
color:${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')}
font-weight:300;
font-size:20px;
`
export const ContentAndSideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
