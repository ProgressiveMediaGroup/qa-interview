// Node_Modules
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

// Styles
import './styles/main.css'

// Routes
import App from './containers/App'

// Reducers
import qaTestReducers from './reducers'

let store = createStore(
  qaTestReducers,
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
        <App />
      </Provider>
    )
  }
}

export default Root
