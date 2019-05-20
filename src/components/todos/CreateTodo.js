import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

    state = {
      text: '',
    };


  // using arrow function in the onChange event handler, 'this' will default
  // to the context they are in.
  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

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
            <input
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // here, addTodo becomes a function in props that can take arguments
    // in the component, we can call this.props.addTodo(this.state), because
    // this.setState is an object with one property only, text.
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData})
  }
}




export default connect(null, mapDispatchToProps)(CreateTodo);
