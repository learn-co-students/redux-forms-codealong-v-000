import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
  };

  render() {
    return (
      <div>
        <form>
          <p>
            <label htmlFor="">add todo</label>
            <input
              type="text"
              value={this.state.todo}
              name="todo"
              onChange={this.handleChange}
            />
          </p>
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);
