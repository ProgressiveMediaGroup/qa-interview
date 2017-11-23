// Node_Modules
import React, { Component } from 'react'

// Display Components
import Header from '../components/Header'
import Body from '../components/Body'

class PageNotFound extends Component {
  render () {
    return (
      <div>
        <Header url='/404' pagetitle='404: Page not found' />
        <Body heading='404' subheading='Page not found'>
          <p>Sorry, but the page you were looking for has not been found.</p>
        </Body>
      </div>
    )
  }
}

export default PageNotFound
