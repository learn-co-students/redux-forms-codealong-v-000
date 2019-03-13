import React, { Component } from 'react'
import { connect } from 'react-redux';
 
class CreateTodo extends Component {
    state = {
      text: '',
    };

//don't write as a class method -- declare it as a class property and give it an arrow function 
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };

  
  render() {
    return(
      <div>
          <form onSubmit={ event => this.handleSubmit(event)}>
            <p>
              <label>add todo </label>
              <input 
                  type="text"
                  onChange={event => this.handleChange(event)} 
                  value={this.state.text} />
            </p>
              <input type="submit" />  
          </form>  
      </div>
     );
   };

}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({
      type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
