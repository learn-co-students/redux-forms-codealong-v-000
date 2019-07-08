import { connect } from 'react-redux';
import React, { Component } from 'react'


class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

    handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state});
  };


  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};



export default connect()(CreateTodo);
