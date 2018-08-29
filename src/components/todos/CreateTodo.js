import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit = event => {
    this.props.addTodo(this.atate);
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" value={this.state.text} onChange={this.handleChange}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch( { type: "ADD_TODO", payload: formData } )
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
