import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
    }
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }; 


handleSubmit= (event)=>{
  event.preventDefault();
  this.props.store.dispatch({
    type: 'ADD_TODO',
    todo: this.state,
  });
}

  render() {
    console.log("this.props at Render() in 'CreateTodo' component:...")
    console.log(this.props)
// debugger
// Our App component passes the store as a prop down to the CreateTodo component. So if you put a debugger right after the line render in CreateTodo, and type in this.props in the console, you can see we have access to the store as one of the props.//

    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(e)=> this.handleChange(e)} />
          </p>
          <input onSubmit={(e)=> this.handleSubmit(e)} type='submit' />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
