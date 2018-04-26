import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
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
      todo: this.state
    })
    document.getElementById("form").reset();
  }

  render() {
    return(
      <div>
        <form id="form" onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo </label>
            <input type="text" onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
        <ul>
          {this.props.store.getState().todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </div>
    )
  }
}

export default CreateTodo;
