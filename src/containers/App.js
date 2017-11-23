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
import PageOne from '../pages/PageOne'
import PageTwo from '../pages/PageTwo'
import PageThree from '../pages/PageThree'
import PageNotFound from '../pages/PageNotFound'

// Display Components
import Footer from '../components/Footer'

// Initial Class containing all Routes
class App extends Component {
  render () {
    const { notifications } = this.props

    return (
        <BrowserRouter>
          <div className='route-container'>
            <Notifications notifications={notifications}  />
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/automated/test-case-1' component={PageOne} />
              <Route exact path='/automated/test-case-2' component={PageTwo} />
              <Route exact path='/manual/test-case-1' component={PageThree} />
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
