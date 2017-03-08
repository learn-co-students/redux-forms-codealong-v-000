import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  submitTodo(e){
    e.preventDefault()
    console.log(this)
    this.setState({text: ''})
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.submitTodo(e)}>
          <p>
            <label>
              add todo
            </label>
            <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
        <ul>
          {this.props.store.getState().todos.map(todo => <li>{todo}</li>)}
        </ul>
      </div>
    )
  }
}

export default CreateTodo;
