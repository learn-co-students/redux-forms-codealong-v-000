import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state)
    // Alternatively, since if not given any arguments, `connect` will return `dispatch` as a prop to the component we're wrapping with `connect` (in this case, CreateTodo):
      // Line 49: export default connect()(CreateTodo)
      // Line 20: this.props.dispatch({
      //  type: 'ADD_TODO',
      //  payload: this.state
      // })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Add Todo </label>
            <input type='text' onChange={this.handleChange} value={this.state.text}/>
          </p>
            <input type='submit'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({
      type: 'ADD_TODO',
      payload: formData
    })
  }
}

export default connect (null, mapDispatchToProps)(CreateTodo);
