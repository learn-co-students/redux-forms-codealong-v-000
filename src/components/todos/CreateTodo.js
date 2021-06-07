import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    text: ""
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
	addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
});

//On submission of the form in our component, 
//we want to send the value we've captured in the local state
//to be added to our Redux store. 

export default connect(null, mapDispatchToProps)(CreateTodo);
