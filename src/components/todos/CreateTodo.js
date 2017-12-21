import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(){
    super();
    this.state = {
      text:' ', //sets up initial state
    }
  }
  handlechange(event){ //pass through event which is from the event handler.
      this.setState({
        text:event.target.value //target is input that was listening to the event (text field) and value is the current value of text field
      })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
  }
  render() {
    return(
      <div>
        <form onSubmit{(event) => this.handleSubmit(event)}>
          <p>
            <label> add todo </label>
            <input type="text"  onChange={(event) => this.handleChange(event)}/> //every time user changes input field call the function
          </p>
          <input type="submit"/>
        </form>
        {this.state.text} //ensure we are properly changing the state
      </div>
    )
  }
}

export default CreateTodo;

//need to use React to update this component when someone types something in the form, so we can call store.dispatch with the type to 'ADD_TODO' and update the state
