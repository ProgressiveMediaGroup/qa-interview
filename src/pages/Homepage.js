// Node_Modules
import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { success, error } from 'react-notification-system-redux'

// Display Components
import Body from '../components/Body'
import HomepageForm from '../components/HomepageForm'

const successConfig = {
  title: "Success",
  message: "Sign in successful",
  position: "tc",
  autoDismiss: 5
}

const errorConfig = {
  title: "Error",
  message: "Please complete all fields marked as required",
  position: "tc",
  autoDismiss: 5
}


class Homepage extends Component {

  onSubmit = (values) => {
    const { error } = this.props
    console.log(values)
    error(errorConfig)
  }

  render () {
    return (
      <Body heading='Progressive Content' subheading='QA Test'>
        <p>[Copy required]</p>
        <HomepageForm onSubmit={this.onSubmit} />
      </Body>
    )
  }
}

Homepage.propTypes = {
  notifications: PropTypes.array
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    success: message => {
      dispatch(success(message))
    },
    error: message => {
      dispatch(error(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
