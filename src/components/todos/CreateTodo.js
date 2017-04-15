import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    };
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type='text' onChange={(event)=>this.handleChange(event)} />
          </p>
          <input type='submit' />
        </form>
        {this.state.text}
      </div>
    )
  }

  handleSumit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }
}

export default CreateTodo;
