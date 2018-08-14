import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class CreateTodo extends Component {
 
  state = {
    text: ''
  }
 
  handleChange = event => {
    //Makes this a 'controlled' form, such that state is constantly updating with every change that's made.
    this.setState({
      text: event.target.value
    });
  }
 
  handleSubmit = event => {
    event.preventDefault()
    
    //Pass this.state (which holds the text entered and updated by handleChange) to whatever
    //The parent element passed this element as the addTodo function (should be something reducer knows how to do...)
    this.props.addTodo(this.state)
  }
 
  render() {
    return(
      <div>
        <form onSubmit={ (event) => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input
          type="text"
          onChange={ (event) => this.handleChange(event) } value={ this.state.text }/>
          </p>
          <input type="submit" />
       </form>
     </div>
   );
  }
};
 
const mapDispatchToProps = dispatch => {
  return {
    //Create a new prop called addTodo which is a function where form data (as arg) is passed to dispatch in the format
    //listed inline below. This allows us to call this.props.addTodo(formData)
    //I believe this is an object whose values are all functions that represent actions taken by the reducer.
    //This allows you to call the reducer action from the props of this and every instance of this component
    addTodo: formData => dispatch({ type: 'EXAMPLE', payload: formData })
  }
}
 
 
//If nothing was provided in 'connect()', you could still pass this through, but you'd have to 
//do it explicitly above by passing this.props.dispatch({type: "ACTUAL_ACTION", payload: 'this.state'})
// But thanks to mapDistpatch
export default connect(null, mapDispatchToProps)(CreateTodo);