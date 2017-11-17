// Node_Modules
import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

// Styles
import './styles/main.css'

// Routes
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'

// Display Components
import CookieBar from './containers/CookieBar'
import Header from './components/Header'
import Footer from './components/Footer'

// Reducers
import technicalTestReducers from './reducers'
let store = createStore(
  technicalTestReducers,
  {},
  compose(
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
)

// Initial Class containing all Routes
class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='route-container'>
            <CookieBar />
            <Header />

            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route component={PageNotFound} />
            </Switch>

            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Root
