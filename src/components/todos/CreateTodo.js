import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleChange = e => {
    //* arrow functions don't define their own version of .this, they default to the context they are in.
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault(e);
    this.props.dispatch({ type: "ADD_TODO", payload: this.state });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              onChange={e => this.handleChange(e)}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
}

export default connect()(CreateTodo);
