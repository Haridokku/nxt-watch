import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  list-style-type: none;
`
export const GamingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  margin: 10px;
`
export const ImageElement = styled.img`
  width: 150px;
  height: 150px;
`
export const HeadingItem = styled.p`
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: ${props => (props.isDarkTheme ? '#7e858' : ' #616e7c')};
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
`
