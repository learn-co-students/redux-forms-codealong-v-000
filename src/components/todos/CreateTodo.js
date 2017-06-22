import React, { Component } from 'react'

class CreateTodo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: "",
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>
            <label>add todo</label>
            <input onChange={(e) => this.handleChange(e)} type="text"></input>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
