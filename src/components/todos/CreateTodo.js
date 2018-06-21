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
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)} /> // (event) => `this.handleChange(event)` akin to `this.handleChange.bind(this)`
          </p>
          <input type="submit" />
        </form>
        {this.state.text} // this is here just to ensure that state is being change properly
      </div>
    );
  }
};

export default CreateTodo;
