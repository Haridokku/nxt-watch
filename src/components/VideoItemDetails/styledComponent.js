import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#f9f9f9')};
`
export const ImageElement = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`
export const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const Description = styled.li`
  font-size: 18px;
  color: '#181818';
  font-family: 'Roboto';
  font-weight: 400px;
`
export const DescriptionListTypeNone = styled(Description)`
  list-style-type: none;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const HeadingElement = styled.h1`
color:${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')}
font-weight:600;
font-size:25px;
`
export const Heading2 = styled(HeadingElement)`
  font-weight: 400;
  font-size: 20px;
`
export const LikesAndSaveContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Text = styled.p`
  margin-left: 10px;
  color: #616e7c;
  font-size: 18px;
  font-family: 'Roboto';
`
export const HorizontalLine = styled.hr`
  width: 100%;
  border: 2px solid #64748b;
`
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`
export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const DescriptionDetails = styled.p`
  font-size: 18px;
  color: #94a3b8;
  font-family: 'Roboto';
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
export const SearchContainer = styled.div`
  border: 2px solid #94a3b8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const InputElement = styled.input`
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#f9f9f9')};
  padding: 15px;
  width: 80%;
`
export const FailureContainer = styled.div`
display:flex;
flex-direction:column:
justify-content:center;
align-items:center;
`

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 8px;
  padding: 10px;
  border: none;
  cursor: pointer;
`
export const LikeButton = styled.button`
  border: none;
  outline: none;
  color: ${props => (props.Liked ? '#2563eb' : '#64748b')};
`
export const ContentAndSideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: Center;
`
