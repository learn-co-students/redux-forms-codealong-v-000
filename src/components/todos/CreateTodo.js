import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      task: '',
      assignedTo: ''
    };
  }

  handleTaskChange = event => {
    this.setState({
      task: event.target.value
    });
  };
  
  handleAssignedToChange = event => {
    this.setState({
      assignedTo: event.target.value
    });
  };

  // Alternate way to handle dispatch, used with mapDispatchToProps function below:
  // handleSubmit = event => {
  //   event.preventDefault;
  //   this.props.addTodo(this.state);
  // }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
    this.setState({
      task: '',
      assignedTo: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>Add Task:</label>
            <input type="text" onChange={this.handleTaskChange} value={this.state.task} />
            <br />
            <label>Assigned To:</label>
            <input type="text" onChange={this.handleAssignedToChange} value={this.state.assignedTo} />
          </p>
          <input type="submit" />
        </form>
        {this.state.task}
        <br />
        {this.state.assignedTo}
      </div>
    )
  }
}

// Alternate way to handle dispatch with #handleSubmit above (otherwise not needed):
// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
//   }
// }

// Export line needed with alternate coding of dispatch above:
// export default connect(null, mapDispatchToProps)(CreateTodo);

export default connect()(CreateTodo);
