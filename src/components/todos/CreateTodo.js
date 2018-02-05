import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
    }
  }
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }; 

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state,
    })
  };

  render() {
     // debugger;
     console.log("props @ render in createTodo: ", this.props.store.getState().todos)
// Our App component passes the store as a prop down to the CreateTodo component. So if you put a debugger right after the line render in CreateTodo, and type in this.props in the console, you can see we have access to the store as one of the props.//

    return(
      <div>
      <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)} />
          </p>
          <input type='submit' />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
