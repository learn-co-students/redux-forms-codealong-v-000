import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todo'

class CreateTodo extends Component {
  state = {
    text: ''
  };

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    this.props.addTodo(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label>add todo</label>
            <input 
              type="text" 
              onChange={this.handleOnChange} 
              value={this.state.text} 
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(state => { this.state }, { addTodo })(CreateTodo);
