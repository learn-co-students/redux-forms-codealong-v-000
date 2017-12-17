import React, { Component } from 'react'

class CreateTodo extends Component {

  constructor() {
  super();
  this.state = {
    text: '',
  };
}


  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onCHange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
         {this.state.text}
        </div>
    )
  }
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TOTO',
      todo: this.state,
    })
  }

}



export default CreateTodo;
