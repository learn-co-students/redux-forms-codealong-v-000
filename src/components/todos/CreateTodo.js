import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>Add Todo: </label>
            <input type="text" value={this.state.text} onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TOTO', payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
