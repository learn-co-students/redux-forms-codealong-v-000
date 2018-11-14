import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
  super();
  this.state = {
    text: '',
  };
}
/*OR
state = {
   text: ''
 }
*/
handleChange(event) {
  this.setState({
    text: event.target.value
  });
};

/*OR
handleChange = event => {
  this.setState({
    text: event.target.value
  });
}
*/

handleSubmit = event => {
  event.preventDefault();
  this.props.addTodo(this.state)
}

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

let mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}
//On submission of the form in our component, we want to send the value we've captured in the local state to be added to our Redux store. With the above set up, addTodo becomes a function in props that is able take arguments.

//export default CreateTodo;
export default connect(null, mapDispatchToProps)(CreateTodo);
//We can shorten this. onChange takes a function, so simply saying onChange={this.handleChange} works. The event is passed in as the argument. This will only work, however, if you are using an arrow function to define handleChange. Without the arrow, you will either need to bind the function, this.handleChange.bind(this), or use the (event) => this.handleChange(event).
