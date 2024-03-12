import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: Center;
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
