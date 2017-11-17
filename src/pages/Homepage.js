// Node_Modules
import React, { Component } from 'react'

// Display Components
import Body from '../components/Body'
import HomepageForm from '../components/HomepageForm'

class Homepage extends Component {

  onSubmit = (values) => {
    console.log(values)
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

export default Homepage
