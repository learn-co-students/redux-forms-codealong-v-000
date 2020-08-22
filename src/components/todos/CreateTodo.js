// ./src/components/todos/CreateTodo.js

// 1) We pass through the event, which comes from the onChange event handler. 
// 2) The event's target is the input that was listening for the event (the text field), and the 
    // value is the current value of that text field. 
// 3) We're using class method syntax to define handleChange() on our component. 
// 4) The JSX code within our render() method is particular to a specific instance 
  // of the component, but, by default, class methods are called the context of the 
  // prototype chain, not an instance. In order for this to correctly reference this 
  // specific instance of our component, we need to either bind it 
  // (often done in the constructor()), or use an arrow function in our onChange event handler. 
  // Because arrow functions don't define their own version of this, they'll default to 
  // the context they are in.
// 5) handleChange() will always be bound to the particular instance of the component it is defined in.
// We never intend for handleChange() to be used any other way. 
// 6) In modern JavaScript, we are able to directly class assign properties instead of assigning them 
// inside a constructor(). This means that, instead of writing handleChange() as a class method, 
// we could declare it as a class property and assign an arrow function to it.

import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
 
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
 
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }
 
  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input
          type="text"
          onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
       </form>
       {this.state.text}
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData 
  })
};
};

export default connect(null, mapDispatchToProps)(CreateTodo);