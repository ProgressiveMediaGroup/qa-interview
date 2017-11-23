// Node_Modules
import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { success, error } from 'react-notification-system-redux'

// Display Components
import Header from '../components/Header'
import Body from '../components/Body'
import HomepageForm2 from '../components/HomepageForm2'

const successConfig = {
  title: "Success",
  message: "Sign in successful",
  position: "tc",
  autoDismiss: 600
}

class PageThree extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (values) => {
    this.props.successNotification(successConfig)
  }

  render () {
    return (
      <div>
        <Header url='/manual/test-case-1' pagetitle='Manual QA: Test Case 1' />
        <Body heading='Manual QA' subheading='Test Case 1'>
          <p>Prepare the following documents for the below form: </p>
          <ul>
            <li>Test Plan </li>
            <li>Test Cases </li>
            <li>Bug Report</li>
          </ul>
          <p>You may approach this task however you see fit. The aim of the task is to see your approach to testing the website. </p>

          <hr/>

          <HomepageForm2 onSubmit={this.onSubmit} />
        </Body>
      </div>
    )
  }
}

PageThree.propTypes = {
  notifications: PropTypes.array
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    successNotification: message => {
      dispatch(success(message))
    },
    errorNotification: message => {
      dispatch(error(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageThree)
