import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { addCard } from '../../reducers/CardReducer';
export default class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      header: '',
      body: '',
      type: ''
    };
  }

  componentDidMount() {
    findDOMNode(this.refs.header).focus()
  }

  handleHeaderChange = (e) => {
    this.setState({
      header: e.target.value
    })
  };

  handleBodyChange = (e) => {
    this.setState({
      body: e.target.value
        })
  };

  handleTypeChange = (e) => {
    this.setState({
      type: e.target.value
    })
  };

  handleSubmit = (e) => {
    const { dispatch } = this.props
    const { header, body, type } = this.state
    e.preventDefault()
    if (!header || !body || !type) return

    let card = {
      header: header,
      body: body,
      type: type,
      showanswer: false
    };
    console.log(this.state);
    console.log(card);
    dispatch(addCard(card));

    this.setState({
      header: '',
      body: '',
      type: ''
    })

  };

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
        <div className="input-group">
          <span className="input-group-addon">Header</span>
          <input className="form-control" placeholder="Header" onChange={ this.handleHeaderChange } ref="header" value={ this.state.header }/>
        </div><br />
        <div className="input-group">
          <span className="input-group-addon">Body</span>
          <input className="form-control" placeholder="Body" onChange={ this.handleBodyChange } value={ this.state.body }/>
        </div><br />
        <div className="input-group">
          <span className="input-group-addon">Type</span>
          <input className="form-control" placeholder="Type" onChange={ this.handleTypeChange } value={ this.state.type }/>
        </div><br />
        <button className="btn btn-success" type="submit">
          Add Card
        </button>
      </form>
      </div>

    )
  }
}
