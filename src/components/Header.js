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
            <Navigation />
          </div>
        </div>
        <div className='breadcrumbs'>
          <div className='container'>
            <Link to='/'>/ Home /</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
