import React, { Component } from 'react'

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state,
    })
    this.setState({
      text: '',
    })
    document.querySelector('input[type="text"]').value = '';
  }

  handleClick(event) {
    this.props.store.dispatch({
      type: 'REMOVE_TODO',
      todo: event.target.textContent
    })
  }


  render() {
    const todoList = this.props.store.getState().todos.map(todo => <li onClick={(event) => this.handleClick(event)} key={todo}>{todo}</li>)
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add ToDo</label><br />
            <input type="text" onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
        {todoList.length > 0 ? 'Click Todo to remove' : null }
        <ul>
          {todoList}
        </ul>
      </div>
    )
  }
}

export default CreateTodo;
