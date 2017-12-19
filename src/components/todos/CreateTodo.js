import React, { Component } from 'react'

class CreateTodo extends Component {
	constructor() {
		super();
		this.state = {
			text: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			text: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.store.dispatch({
			type: 'ADD_TODO',
			todo: this.state //action ...which is the value that we want to pass in.
		});
	}

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        	<p>
        		<label>add todo</label>
        		<input type="text" onChange={this.handleChange} />
        	</p>
        	<input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;


// state is set here. So we have to find a way to set the state found in createStore.js from here...
// we do this by passing the let store = createStore(manageTodo) all the way down as props...
