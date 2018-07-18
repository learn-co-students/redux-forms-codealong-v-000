// ./src/components/todos/CreateTodo.js
 
import React, { Component } from 'react';
 
class CreateTodo extends Component {
 
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
 
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  handleSubmit(event) {
  	debugger
	  event.preventDefault();
	  this.props.store.dispatch({
	    type: 'ADD_TODO',
	    todo: this.state,
	  });
	}

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input
          type="text"
          onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
       </form>
       {this.state.text}
       <div>{this.props.store.getState().todos}</div>
     </div>
   );
  }
};
 
export default CreateTodo;