import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="">add todo</label>
            <input
              type="text"
              onChange={this.handleChange}
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

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData =>
      dispatch({
        type: 'ADD_TODO',
        payload: formData
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);
