import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
    this.setState({
      text: ''
    });
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    const todos = this.props.store.getState().todos.map((todo, i) => <p key={i}>{todo}</p>)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" value={this.state.text} onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form>
        {todos}
      </div>
    )
  }
}

export default CreateTodo;
