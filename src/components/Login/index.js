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
  CheckboxContainer,
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

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
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

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <ContentContainer>
          <ImageElement
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.submitForm}>
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
                type={isChecked ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </LabelAndInputContainer>
            <CheckboxContainer>
              <CheckboxInput
                id="checkbox1"
                type="checkbox"
                checked={isChecked}
                onClick={this.changeCheckboxStatus}
              />
              <LabelElement htmlFor="checkbox1">Show Password</LabelElement>
            </CheckboxContainer>
            <ButtonElement type="submit">Login</ButtonElement>
            {isSubmitError && <Description>{`*${errorMsg}`}</Description>}
          </FormContainer>
        </ContentContainer>
      </AppContainer>
    )
  }
}

export default Login
