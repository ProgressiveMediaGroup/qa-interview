// Node_Modules
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Display Components
import Header from '../components/Header'
import Body from '../components/Body'

class Homepage extends Component {
  render () {
    return (
      <div>
        <Header url='/' pagetitle='Home' />
        <Body heading='Progressive Content' subheading='Online QA Test'>
          <h2>Automation QA</h2>
          <ul>
            <li><Link to="/automated/test-case-1">Test Case 1</Link></li>
            <li><Link to="/automated/test-case-2">Test Case 2</Link></li>
          </ul>
          <hr />
          <h2>Manual QA</h2>
          <ul>
            <li><Link to="/manual/test-case-1">Test Case 1</Link></li>
          </ul>
        </Body>
      </div>
    )
  }
}

export default Homepage
