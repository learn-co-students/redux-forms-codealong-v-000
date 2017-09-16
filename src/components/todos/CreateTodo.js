import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state,
    })
  }

  render() {
    return(
      <div>
        <form id="todo-form" onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <lable>add todo</lable>
            <input type="text" onChange={(event) => this.handleChange(event)}></input>
          </p>
            <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default CreateTodo;
