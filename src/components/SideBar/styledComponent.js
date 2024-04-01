import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const PopupAndContactDetails = styled.div`
  width: 25%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f1f5f9')};
  @media screen and (max-width: 767px) {
    display: none;
  }
  height: 100vh;
  padding: 10px;
`
export const HeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
export const PopupElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ButtonElement = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 15px;
  background-color: transparent;
`
export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  text-decoration: none;
`
export const ListItem = styled.li`
  list-style-type: none;
  margin: 5px;
  display: flex;
  align-items: center;
`
export const Describe = styled.p`
  color: #0f0f0f;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
  margin-left: 20px;
  text-decoration: none;
`
export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const HeadingElement = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#231f20')};
  font-size: 25px;
  font-weight: bold;
`
export const IconsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ImageElement = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`
