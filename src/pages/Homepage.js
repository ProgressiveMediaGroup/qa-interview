// Node_Modules
import React, { Component } from 'react'

// Display Components
import Body from '../components/Body'

class Homepage extends Component {
  render () {
    return (
      <Body heading='Progressive Content' subheading='Front-end Technical Test'>
        <p>This project is used as a technical test when interviewing potential front-end web developers for Progressive Content.</p>
        <p>For more information, check out the README file...</p>
      </Body>
    )
  }
}

export default Homepage
