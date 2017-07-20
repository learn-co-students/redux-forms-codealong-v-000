import React, { Component } from 'react' //renders a little form

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
};

//Notice that our action.todo is this.state. This is because our state always holds the value of our input, and we want to pass that value that value into our dispatched action. So for example, if a user types in "add groceries", we will be dispatching, { type: 'ADD_TODO', todo: { text: "add groceries" } }.
handleSubmit(event) {
  event.preventDefault();
  this.props.store.dispatch({
    type: 'ADD_TODO',
    todo: this.state,
  });
}

  render(){
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Add to-do: </label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
}

export default CreateTodo;
