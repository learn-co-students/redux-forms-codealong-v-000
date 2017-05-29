import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.store.dispatch({
      type: "ADD_TODO",
      todo: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(e) => this.handleChange(e)} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
