import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
//  constructor() {
//    super();
//    this.state = {
    state = {
	text: ''
    };
//  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

//  mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
//   }
//  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
//    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
	<form onSubmit={ event => this.handleSubmit(event) } >
          <p>
            <label>add todo</label>
	    <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

 
//export default connect(null, mapDispatchToProps)(CreateTodo);
export default connect()(CreateTodo);
//export default CreateTodo;
//export default connect(null, mapDispatchToProps)
//(CreateTodo);
