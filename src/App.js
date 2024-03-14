import {Component} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import CartContext from './context/CartContext'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedList: []}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  saveOnList = objectDetails => {
    this.setState(prevState => ({
      saveList: [...prevState.saveList, objectDetails],
    }))
  }

  render() {
    const {isDarkTheme, savedList} = this.state
    return (
      <CartContext.Provider
        value={{
          isDarkTheme,
          savedList,
          onChangeTheme: this.changeTheme,
          moveToSaveList: this.saveOnList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <Redirect to="/not-found" />
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
