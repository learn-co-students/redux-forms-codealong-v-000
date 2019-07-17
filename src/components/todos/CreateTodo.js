import React, { Component } from 'react'

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}


class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} />
            </p>
            <input type="submit"/>
          </form>
      </div>
    )
  }
}

export default CreateTodo;
