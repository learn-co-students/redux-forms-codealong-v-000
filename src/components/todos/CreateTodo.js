import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  // Note : Constructor for local state
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
   
  // Note : Function to handle input changing
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };
  
  // Note : Function to handle form submission
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }


  render() {
    return(
    <div>
      <form onSubmit={ event => this.handleSubmit(event) }>
        <p>
          <label>add todo</label>
          
          {/* Note : Need to use "this.handleChange.bind(this)" or "(event) => this.handleChange(event)" */}
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
        </p>
        <input type="submit" />
      </form>
      
      {/* Note : This is just for debugging purposes (so we know that the state is properly changing) */}
      {this.state.text}
    </div>
    );
  }
}


// Note : Could use separate action file and import in, but not needed for right now (and easier to understand here without)
mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
  }
}


// Note : Connecting component to store and getting the dispatch function but don't need "mapStateToProps" (null) because this component doesn't need to directly access/change global state
export default connect(null, mapDispatchToProps)(CreateTodo);
