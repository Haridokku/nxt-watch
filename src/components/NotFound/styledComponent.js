import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
`
export const ImageElement = styled.img`
  height: 300px;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
`
export const HeadingElement = styled.h1`
color:${props => (props.isDarkTheme ? '#f1f1f1' : '#181818')}
font-size:25px;
font-weight:bold;
font-family:"Roboto";
text-align:center;
`
export const Description = styled.p`
  color: #64748b;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  font-family: 'Roboto';
`
export const ContentAndSideBar = styled.div`
  display: flex;
  justify-content: space-between;
`
