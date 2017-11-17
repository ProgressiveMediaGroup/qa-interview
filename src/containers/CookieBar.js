// Node_Modules
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import * as actions from '../actions'

// Styles
import '../styles/cookiebar.css'

export class CookieBar extends Component {
  render () {
    if (this.props.cookiebar.accept) {
      return null
    } else {
      return (
        <div className='cookie-bar'>
          <div>
            <span>This website might use cookies. Please let us know you agree to this:</span>

            <button onClick={this.props.actions.acceptCookies}>Accept Cookies</button>
          </div>
        </div>
      )
    }
  }
}

CookieBar.defaultProps = {
  cookiebar: {
    accept: false
  },
  actions: {
    acceptCookies: function () {}
  }
}

CookieBar.propTypes = {
  cookiebar: PropTypes.object,
  actions: PropTypes.object
}

function mapStateToProps (state) {
  return {
    cookiebar: state.cookiebar
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CookieBar)
