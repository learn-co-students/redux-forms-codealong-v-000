import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  };

  // handleChange(event) {
  //   this.setState({
  //     text: event.target.value
  //   });
  // };

  // The JSX code within our render() method is particular to a specific instance of
  // the component, but, by default, class methods are called the context of the
  // prototype chain, not an instance. In order for this to correctly reference this
  // specific instance of our component, we need to either bind it( often done in the
  // constructor() ), or use an arrow function in our onChange event handler. Because
  // arrow functions don't define their own version of this, they'll default to the
  // context they are in.

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.props.addTodo(this.state)
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  };

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            {/*
              <input type="text" onChange={(event) => this.handleChange(event)}/>
              this.handleChange refers to the definition of a function that takes in
              the event as an argument. No need for the onChange arrow function
              callback anymore
            */}
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
//   };
// };

// export default connect(null, mapDispatchToProps)(CreateTodo);
export default connect()(CreateTodo);
