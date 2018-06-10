import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state,
    });
  }

  render() {
    // debugger; // shows we have access to `this.props.store` in our console.
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input onChange={(event) => this.handleChange(event)} type="text" />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
