import styled from 'styled-components'

export const PopupAndContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f1f5f9')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PopupElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const ButtonElement = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`
export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ListItem = styled.li`
  list-style-type: none;
  margin: 5px;
`
export const Describe = styled.p`
  color: #0f0f0f;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
  margin-left: 20px;
`
export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const HeadingElement = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#231f20')};
  font-size: 25px;
  font-weight: bold;
`
export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const ImageElement = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`
