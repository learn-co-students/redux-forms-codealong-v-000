import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.dispatch({type: 'ADD_TODO', playload: this.state})
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>add todo</label>
            <input onChange={this.handleChange} value={this.state.text} type="text"/>
          </p>
            <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    )
  }
}




export default connect()(CreateTodo);
