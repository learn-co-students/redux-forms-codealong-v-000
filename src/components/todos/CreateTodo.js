import React, { Component } from 'react'

class CreateTodo extends Component {

  constructor () {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
  }

  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Add Todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
