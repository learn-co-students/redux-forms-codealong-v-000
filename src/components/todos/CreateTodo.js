import React, { Component } from 'react'
import { connect } from 'react-redux'; // you need this to make the export statement (at the very bottom of this page) work

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  /*
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  We never intend for handleChange() to be used any other way. In modern
  JavaScript, we are able to directly class assign properties instead of
  assigning them inside a constructor(). This means that, instead of writing
  handleChange() as a class method, we could declare it as a class property and
  assign an arrow function to it:
  */
  handleChange = event => {
      this.setState({
          text: event.target.value
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
              <input
                type="text"
                onChange={event => this.handleChange(event)}
                value={this.state.text}
              />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
/*
On submission of the form in our component, we want to send the value we've
captured in the local state to be added to our Redux store. With the above set
up, addTodo becomes a function in props that is able take arguments.

From the Redux docs, we know that needs to be a plain javascript object with a
type key describing the type of action. We also need to include the data from
the form - in this case, we'll call that key 'payload'.
*/
const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

/*
Ok, let's connect the CreateTodo. First, we want to import connect from
react-redux and modify our export statement:
*/

// export default CreateTodo;
export default connect(null, mapDispatchToProps)(CreateTodo);
/*
In this component, we are not currently concerned with writing a
mapStateToProps() function (the first argument passed to connect) as this
component doesn't need any state. Since we only need to dispatch an action here
and we are not getting information from our store, we can use null instead of
mapStateToProps as the first argument.
*/
