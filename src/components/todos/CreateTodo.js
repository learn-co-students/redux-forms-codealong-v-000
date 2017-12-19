import React, { Component } from 'react'

class CreateTodo extends Component {

  constructor() {
    super()

    this.state = {
      text: ""
    }
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_TODO",
      todo: this.state
    })
    document.getElementById("form1").reset();
  }

  render() {
    return(
      <div>
        <form id='form1' onSubmit={(event)=> this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input id="input-field" type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
