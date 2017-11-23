// Node_Modules
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const navitems = [
  {
    url: '/',
    title: 'Home'
  },
  {
    url: '/automated/test-case-1',
    title: 'Automated QA: Test Case 1'
  },
  {
    url: '/automated/test-case-2',
    title: 'Automated QA: Test Case 2'
  },
  {
    url: '/manual/test-case-1',
    title: 'Manual QA: Test Case 1'
  }
];

class Navigation extends Component {

  constructor() {
    super();
    this.renderNavItem = this.renderNavItem.bind(this);
  }

  renderNavItem (item,index) {
    if (this.props.url === item.url) {
      return <li><Link to={item.url} className="selected">{item.title}</Link></li>
    }

    return <li><Link to={item.url}>{item.title}</Link></li>
  }

  renderNavItems () {
    return navitems.map(this.renderNavItem)
  }

  render () {
    return (
      <ul>
        {this.renderNavItems()}
      </ul>
    )
  }
}

export default Navigation
