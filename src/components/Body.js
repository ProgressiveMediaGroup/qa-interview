// Node_Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Body extends Component {
  render () {
    return (
      <main>
        <div className='strap'>
          <div className='container'>
            <h1>{this.props.heading}</h1>
            <h2>{this.props.subheading}</h2>
          </div>
        </div>
        <div className='container body-container'>
          {this.props.children}
        </div>
      </main>
    )
  }
}

Body.defaultProps = {
  heading: '',
  subheading: ''
}

Body.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string
}

export default Body
