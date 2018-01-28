import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(){
    super()
    this.state ={
      text: '',
    }
  }
  handleChange(event){
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state,
    })
  }
  render() {
    const list = this.props.store.getState().todos.map(todo => <li>{todo}</li>)
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label> add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
            </p>
            <input type="submit" />
      </form>
        <div> 
          {list}
          </div>
      </div>
    )
  }
}

export default CreateTodo;
