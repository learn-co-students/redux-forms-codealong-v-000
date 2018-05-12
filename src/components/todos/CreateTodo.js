import React, { Component } from 'react'

class CreateTodo extends Component {
  //set up the initial state of the component in the constructor
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  // set the state every time it is called from onChange event
  //we pass through the event to pull needed info
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  //prevents default event and dispatches the action upon being called
  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state,
      //our state always holds the value of our input, and we want to pass that value that value into our dispatched action
      // if a user types in "add groceries", we will be dispatching, { type: 'ADD_TODO', todo: { text: "add groceries" } }
    });
    //erase out old text in textbox
    this.setState({
      text: '',
    });
  }

  render() {
    // form to collect user input
    return(
      <div>
        {/* call a callback on the submission of a form */}
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            {/* Every time the input is changed, we want to change the state by adding an onChange */}
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
        {/* to ensure that we are properly changing the state. */}
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
