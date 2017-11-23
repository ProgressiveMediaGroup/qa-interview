// Node_Modules
import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { success, error } from 'react-notification-system-redux'

// Display Components
import Header from '../components/Header'
import Body from '../components/Body'
import HomepageForm from '../components/HomepageForm'

const successConfig = {
  title: "Success",
  message: "Sign in successful",
  position: "tc",
  autoDismiss: 600
}

class Homepage extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (values) => {
    this.props.successNotification(successConfig)
  }

  render () {
    let initialValues = {firstname: 'Please delete me...'}

    return (
      <div>
        <Header url='/automated/test-case-1' pagetitle='Automated QA: Test Case 1' />
        <Body heading='Automated QA' subheading='Test Case 1'>
          <p>The automated end-to-end test should check that:</p>
          <ul>
            <li>The page title is "Progressive content: QA Test"</li>
            <li>The main header of the page is “Automated QA”</li>
            <li>
              Inserting:
              <ul>
                <li>Gender: Female</li>
                <li>Title : Mrs</li>
                <li>First Name: Emma</li>
                <li>Last Name: Jones</li>
                <li>postcode: W30PN</li>
                <li>email address: test@test.com</li>
                <li>date of birth : 10/08/1984</li>
              </ul>
            </li>
            <li>Clicking on “I agree with the terms and conditions” the user will Success Pop Up. Click on close button </li>
            <li>Take a screenshot after inserting above values</li>
            <li>Click on ‘Clear All’ . Once the values are cleared take a screenshot</li>
          </ul>

          <hr/>

          <HomepageForm initialValues={initialValues} onSubmit={this.onSubmit} />
        </Body>
      </div>
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
    successNotification: message => {
      dispatch(success(message))
    },
    errorNotification: message => {
      dispatch(error(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
