import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    // Notice that we pass through the event, which comes from the onChange event handler.
    this.setState({
      text: event.target.value
    })
    // The event's target is the input that was listening for the event (the text field),
    // and the value is the current value of that text field.
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            {/* every time the user changes the input field
              we should call our handleChange() function*/}
            <input
              id="add_todo"
              type="text"
              onChange={this.handleChange}
              value={this.state.text}>
            </input>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({
//       type: 'ADD_TODO',
//       payload: formData
//     })
//   }
// }

// if not given any arguments, connect will return dispatch as a prop
// to the component we're wrapping with connect:

// export default connect(null, mapDispatchToProps)(CreateTodo);
export default connect()(CreateTodo);
