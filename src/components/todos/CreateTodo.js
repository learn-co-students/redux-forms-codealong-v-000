import React, { Component } from 'react'
import { throws } from 'assert'
import { connect } from 'react-redux'

// NOTE: there is an alternative was to write this.

class CreateTodo extends Component {

     state = {
      text: '',
    };
  
  //  To keep handleChange to function only instance of the components it is defined in.
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

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
            {/* When ever the input changes, we want to change the state
             by adding an onChange event listner here. */}
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })

    // {/* 
    //   NOTE: payLOad is small letter.
    // On submission of the form in our component, 
    // we want to send the value we've captured in the local state to be added to our Redux store. 
    // With the above set up, addTodo becomes a function in
    //  props that is able take arguments.
    // */}
  }
}


export default connect (null, mapDispatchToProps)(CreateTodo);
