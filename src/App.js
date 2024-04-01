import {Component} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import CartContext from './context/CartContext'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false, savedList: []}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  saveOnList = objectDetails => {
    const {savedList} = this.state
    const item = savedList.find(each => each.id === objectDetails.id)
    if (item) {
      const filteredList = savedList.filter(
        eachItem => eachItem.id !== objectDetails.id,
      )
      this.setState({savedList: filteredList})
    } else {
      this.setState(prevState => ({
        savedList: [...prevState.savedList, objectDetails],
      }))
    }
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
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
