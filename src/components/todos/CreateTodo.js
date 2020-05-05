import React, { Component } from 'react'

class CreateTodo extends Component {
  state = { todo: '' }
  
  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <p>
            <label htmlFor="todo">Add Todo: </label>
            <input 
              type="text" 
              name="todo"
              id="todo"
              onChange={this.onInputChange}
              value={this.state.todo}
            />
          </p>
          <button>Submit</button>
        </form>
      </div>
    )
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  }
}

export default CreateTodo;
