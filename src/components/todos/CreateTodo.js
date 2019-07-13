import React, { Component } from 'react'
import { connect } from 'react-redux';

/*
First, we made sure the React component of our application was working. We did this by building a form, and then making sure that whenever the user typed in the form's input, the state was updated.

Second, We connected the component to Redux and designed our mapDispatchToProps

Third, we built our reducer such that it responded to the appropriate event and concatenated the payload into our array of todos.
*/

class CreateTodo extends Component {

  constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  }

  state = {
    text: ''
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  /*
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }
  */

  handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state);
    };

    /*
    Remember that, if not given any arguments, connect will return dispatch as a prop to the component we're wrapping with connect. So an alternative way to write the CreateTodo component could be:

    handleSubmit = event => {
            event.preventDefault();
            this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
        };

    export default connect()(CreateTodo);
    */

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
        addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
    };
};

/*
In this component, we're not currently concerned with writing a mapStateToProps function (the first argument passed to connect) as this component doesn't need any state. Since we only need to dispatch an action here and not getting information from our store, we can use null instead of mapStateToProps as the first argument.
*/

export default connect(null, mapDispatchToProps)(CreateTodo);
