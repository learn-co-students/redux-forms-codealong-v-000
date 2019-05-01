import React, { Component } from 'react'
// Import connect to connect react to redux to move 
// local state to the store.
import { connect } from 'react-redux'
// Import the addTodo action creator to pass into 
// connect.
import { addTodo } from '../../actions/actions'
// Import uuid to give each new todo item a unique id.
import uuid from 'uuid'

class CreateTodo extends Component {
	
	// Define local state for the text input.
	state = {
		todoText: '',
	}

	// Handle changes to the text input.
	handleChange = (e) => {
		// Changes are stored in local state.
		this.setState({
			[e.target.name]: e.target.value,
		})
		console.log("After handleChange, the new state is: ", this.state)
	}

	// Handle form submissions.
	handleSubmit = (e) => {
		// Prevent page reload.
		e.preventDefault()
		// Add a new todo item to the Redux store.
		this.props.addTodo({
			todoText: this.state.todoText,
			completed: false,
			archived: false,
			id: uuid()
		})
		// Add changes to local state.
		// this.setState({
		// 	todoText : e.target.value,
		// })
		console.log("In submit, props are: ", this.props)
		console.log("In submit, local state is: ", this.state)
		
	}

	// Render the form.
	render() {
		return (
			<form 
				id="todoForm" 
				name="todoForm" 
				onSubmit={this.handleSubmit}
			>
				<label htmlFor="todoText">Add a todo item! &nbsp;&nbsp;</label>
				<input
					id="todoText"
					name="todoText"
					onChange={this.handleChange}
					placeholder="Add todo"
					required
					type="text"
				/>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

// Connect React to the Redux store
// We don't need to map the store to local props
// so we can pass in null for the first argument.
// We don't need to explicity map dispatch to props
// either, because connect will automatically 
// wrap addTodo in a call to dispatch.
export default connect(null, {addTodo})(CreateTodo);
