import styled from 'styled-components'

export const ListItemDetails = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  margin: 10px;
`
export const ImageElement = styled.img`
  width: 100%;
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
  align-items: flex-start;
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
`
export const Description = styled.p`
  color: #616e7c;
  font-size: 15px;
  font-weight: 300;
  font-family: 'Roboto';
`
export const ViewsDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`
export const UnorderedList = styled.ul`
  list-style-type: circle;
`
export const ListItem = styled.li`
  color: #616e7c;
  font-size: 15px;
  font-weight: 300;
  font-family: 'Roboto';
`
export const DescriptionWithListType = styled(Description)`
  list-style-type: circle;
  @media screen and (min-width: 768px) {
    list-style-type: none;
  }
`
