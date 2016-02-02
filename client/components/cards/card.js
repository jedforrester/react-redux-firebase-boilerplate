'use strict'

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Card extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props)
  }


  render() {
    const { header, body, id, key } = this.props
    let path = '/cards/' + id;
    return (
      <div className="panel panel-default">
        <div style={{padding: "10px"}}>
      <h2 className="panel-title">
      <Link to={path}>{ header }</Link>
        {this.props.children}
      </h2>
        <div className="panel-body">
          <p className="author">{ body }</p>
          <p>{ id }</p>
        </div>

      </div></div>
    )
  }
}
