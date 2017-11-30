import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(props){
    super(props)
    this.state = {text: ''}
  }
  handleEvent(evt){
    this.setState({
      text: evt.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event)=> this.handleSubmit(event)}>
          <p>
            <label> Add Todo </label>
            <input type="text" onChange={(evt)=>this.handleEvent(evt)}/>
          </p>
          <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
