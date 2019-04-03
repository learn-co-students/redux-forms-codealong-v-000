import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

  state = {
    text: ''
  };

  handleChange = event => {
    this.setState({
      text: event.target.value 
    });
  };

  // when called, whatever is currently stored in this.state will be sent to the reducer via dispatched action
  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  };

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input 
              type="text" 
              onChange={(event) => this.handleChange(event)} 
              value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        {/* {this.state.text} */}
      </div>
    );
  };
};

// mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
//   };
// };

// only need to dispatch an action, & not get info from the store, so use null in place of mapStateToProps
// if not given any arguments, connect will return dispatch as a prop to the component we're wrapping with connect
export default connect()(CreateTodo);
