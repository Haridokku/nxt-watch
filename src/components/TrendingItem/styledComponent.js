import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const VideoItemContainer = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
  margin: 10px;
`
export const ImageElement = styled.img`
  width: 400px;
  height: 200px;
`
export const ContentDetails = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
`
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoDescription = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: Flex-start;
  }
`
export const HeadingElement = styled.p`
  color: #181818;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  padding: 15px;
  text-decoration: none;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Description = styled.li`
  color: #616e7c;
  font-size: 15px;
  font-weight: 300;
  font-family: 'Roboto';
  text-decoration: none;
`
export const ViewsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const UnorderedList = styled.ul`
  list-style-type: disc;
`
export const DescriptionWithListType = styled(Description)`
  list-style-type: circle;
  @media screen and (min-width: 768px) {
    list-style-type: none;
  }
`
export const DescriptionWithListTypeNone = styled(Description)`
  list-style-type: none;
`
export const Describe = styled.p`
  color: #616e7c;
  font-size: 15px;
  font-weight: 300;
  font-family: 'Roboto';
`
