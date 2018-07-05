import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todo: '',
    }
  }

  handleChange(event) {
    this.setState(
      {
        todo: event.target.value,
      }
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    const { store } = this.props;
    const { todo } = this.state;
    store.dispatch({ type: 'ADD_TODO', todo });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Add ToDo</label>
        </div>
          <div>
            <input onChange={this.handleChange.bind(this)} type="text"/>
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateTodo;
