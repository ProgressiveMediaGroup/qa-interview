// Node_Modules
import React, { Component } from 'react'

// Display Components
import Body from '../components/Body'

class PageNotFound extends Component {
  render () {
    return (
      <Body heading='404' subheading='Page not found'>
        <p>Sorry, but the page you were looking for has not been found.</p>
      </Body>
    )
  }
}

export default PageNotFound
