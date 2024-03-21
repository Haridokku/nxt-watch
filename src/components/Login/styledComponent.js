import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageElement = styled.img`
  width: 200px;
  height: 100px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 150px;
    margin-bottom: 20px;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 20px;
`
export const LabelElement = styled.label`
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #1e293b;
  margin-bottom: 10px;
`
export const InputElement = styled.input`
  border: 1px solid #475569;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 10px;
`
export const LabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CheckboxInput = styled.input`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const ButtonElement = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const Description = styled.p`
  color: #ff0b37;
  font-size: 20px;
  font-family: 'Roboto';
`
export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
