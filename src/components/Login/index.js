import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  AppContainer,
  ContentContainer,
  ImageElement,
  FormContainer,
  LabelElement,
  InputElement,
  LabelAndInputContainer,
  CheckboxInput,
  ButtonElement,
  Description,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isSubmitError: false,
    isChecked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  changeCheckboxStatus = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  renderSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  renderFailure = errorMsg => {
    this.setState({errorMsg, isSubmitError: true})
  }

  renderApiCall = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const userDetails = {username, password}
    const options = {
      body: JSON.Stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.renderSuccess(data.jwt_token)
    } else {
      this.renderFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, isChecked, errorMsg, isSubmitError} = this.state
    const value = isChecked ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <ContentContainer>
          <ImageElement />
          <FormContainer onSubmit={this.renderApiCall}>
            <LabelAndInputContainer>
              <LabelElement htmlFor="username">USERNAME</LabelElement>
              <InputElement
                id="username"
                type="text"
                placeholder="Username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </LabelAndInputContainer>
            <LabelAndInputContainer>
              <LabelElement htmlFor="password" onChange={this.onChangePassword}>
                PASSWORD
              </LabelElement>
              <InputElement
                id="password"
                type={value}
                placeholder="Password"
                value={password}
              />
            </LabelAndInputContainer>
            <CheckboxInput
              id="checkbox1"
              type="checkbox"
              checked={isChecked}
              onClick={this.changeCheckboxStatus}
            />
            <LabelElement htmlFor="checkbox">Show Password</LabelElement>
            <ButtonElement type="submit">Login</ButtonElement>
            {isSubmitError && <Description>{`*${errorMsg}`}</Description>}
          </FormContainer>
        </ContentContainer>
      </AppContainer>
    )
  }
}

export default Login
