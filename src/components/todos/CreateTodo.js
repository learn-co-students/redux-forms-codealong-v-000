import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor() {
    super();
    this.state ={
      text: ''
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addToDo(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>Add Todo</label>
            <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

let mapDispatchToProps = dispatch => {
  return {
    addToDo: (formData) => dispatch({type: 'ADD_TODO', payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
