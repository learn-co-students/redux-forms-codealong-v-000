import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addToDo(this.state);
    this.setState({
      text: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              value={this.state.text}
              onChange={(event) => this.handleChange(event)}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: formData => dispatch({ type: "ADD_TODO", payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
