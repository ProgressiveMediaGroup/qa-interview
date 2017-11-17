// Node_Modules
import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Notifications from 'react-notification-system-redux'

// Styles
import '../styles/main.css'

// Routes
import Homepage from '../pages/Homepage'
import PageTwo from '../pages/PageTwo'
import PageThree from '../pages/PageThree'
import PageNotFound from '../pages/PageNotFound'

// Display Components
import CookieBar from '../containers/CookieBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Initial Class containing all Routes
class App extends Component {
  render () {
    const { notifications } = this.props
    return (
        <BrowserRouter>
          <div className='route-container'>
            <Notifications notifications={notifications}  />
            <CookieBar />
            <Header />
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/page-two' component={PageTwo} />
              <Route exact path='/page-three' component={PageThree} />
              <Route component={PageNotFound} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
    )
  }
}

App.propTypes = {
  notifications: PropTypes.array
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  }
}

export default connect(mapStateToProps)(App)
