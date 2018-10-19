import React, { Component } from 'react'
import { connect } from 'react-redux';


class CreateTodo extends Component {

  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch({type: "ADD_TODO", info: this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add ToDo: </label>
            <input onChange={this.handleChange} type="text" />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect()(CreateTodo);
