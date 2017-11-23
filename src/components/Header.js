// Node_Modules
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Assets
import Logo from '../assets/pt-logo.png'

// Styles
import '../styles/header.css'

// Display Components
import Navigation from './Navigation'

class Header extends Component {
  renderBreadcrumbs () {
    if (this.props.url !== '/') {
      return <Link to={this.props.url}>/ {this.props.pagetitle} /</Link>
    }

    return '';
  }

  render () {
    return (
      <header>
        <div className='top'>
          <div className='container'>
            <Link to='/'>
              <img src={Logo} alt='Progressive Tech' className='logo-img' />
            </Link>
          </div>
        </div>
        <div className='menu'>
          <div className='container'>
            <Navigation url={this.props.url} />
          </div>
        </div>
        <div className='breadcrumbs'>
          <div className='container'>
            <Link to='/'>/ Home /</Link>
            {this.renderBreadcrumbs()}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
