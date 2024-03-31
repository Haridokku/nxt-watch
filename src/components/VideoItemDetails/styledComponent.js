import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#f9f9f9')};
  padding: 20px;
`
export const PlayBtn = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
`
export const ImageElement = styled.img`
  align-self: flex-start;
  width: 100%;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 90%;
    height: 350px;
  }
`
export const ListAndLikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  align-self: flex-start;
`
export const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  align-self: flex-start;
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
export const HeadingTitle = styled.h1`
color:${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')}
font-weight:600;
font-size:25px;
align-self:flex-start;
`
export const HeadingElement = styled.p`
color:${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')}
font-weight:600;
font-size:25px;
align-self:flex-start;
`
export const Heading2 = styled(HeadingElement)`
  font-weight: 400;
  font-size: 20px;
`
export const LikesAndSaveContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`
export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Text = styled.span`
  margin-left: 3px;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  font-size: 18px;
  font-family: 'Roboto';
  margin-bottom: 3px;
`
export const TextDisLike = styled(Text)`
  color: ${props => (props.isDislike ? '#2563eb' : '#64748b')};
`
export const SaveBtnText = styled(Text)`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
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
  width: 80px;
  height: 80px;
  margin-right: 10px;
  align-self: flex-start;
`
export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
export const FailureText = styled.p`
  color: #606060;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
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
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  background-color: transparent;
  margin-right: 10px;
  cursor: pointer;
  width: 100px;
`
export const DisLikeButton = styled(LikeButton)`
  border: none;
  outline: none;
  color: ${props => (props.isDislike ? '#2563eb' : '#64748b')};
  background-color: transparent;
  margin-right: 10px;
  cursor: pointer;
`
export const SaveBtn = styled.button`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
  background-color: transparent;
  margin-right: 10px;
  cursor: pointer;
  width: 100px;
  border: none;
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
