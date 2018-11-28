import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  state = {
    text: ""
  };

  handleOnSubmit = event => {
    event.preventDefault();

    const todo = this.state;
    this.props.addTodo(todo);

    this.setState({
      text: ""
    });
  };

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
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
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);
