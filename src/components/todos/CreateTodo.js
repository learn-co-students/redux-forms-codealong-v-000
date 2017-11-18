import React, { Component } from 'react'

class CreateTodo extends Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

//dispatches an action upon being called
  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
  }

  render() {
    // debugger - store is one of the props (from index)
    return(
      /*
      build the form
      update component state by adding an onChange event handler
      change the state every time the input is changed:
        add handleChange method to set the state every time it is called from onChange event
      */
      //callback on the submission of a form
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
      //to ensure that we are properly changing the state
    )
  }
}

export default CreateTodo;
