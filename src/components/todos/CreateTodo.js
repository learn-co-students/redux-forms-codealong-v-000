import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

  state = {
      text: ''
  }
 

  // Step 1: Update component state by adding an onChange event handler
  handleChange = event => {
    this.setState({
      // event's target is the input that was listening for the event (text field), and value is current value of text field
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // payload = actual data transmitted 
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  }


  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input 
              type="text" 
              onChange={(event) => this.handleChange(event)} 
              // completely controlled form: set input's value attr to this.state.props
              value={this.state.text}
            /> 
          </p>
            <input type="submit"/>
        </form>
      </div>
    )
  }
}
// Step 2: On submission of the form, dispatch an action to the store


// component doesn't need any state, so no info from store -null; only need to disptch an action
// mapDispatchToProps = dispatch => {
//   return {
//     addToDo: (formData) => dispatch({ type: "ADD_TODO", payload: formData })
//   }
// }

export default connect()(CreateTodo);
