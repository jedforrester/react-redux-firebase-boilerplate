'use strict'

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{float: "none", fontSize: "18px"}} className="navbar-header">
          <ul className="nav navbar-nav">
            <li><Link to="cards">Cards</Link></li>
            <li><Link to="editCards">Add Cards</Link></li>
          </ul>
      </div>
    )
  }
}
