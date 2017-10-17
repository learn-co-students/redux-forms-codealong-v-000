import React, { Component } from 'react'


class CreateTodo extends Component {
     
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state,
    });
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return(

      <div>
        <form>
          <p>
            <label>Add Todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" onSubmit={(event) => this.handleSubmit(event)} />
        </form>
        {this.state.text}
      </div>
    
    )
  }
}

export default CreateTodo;
