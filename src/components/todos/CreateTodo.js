import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
	constructor() {
		super()
		this.state = {
			text: ''
		}
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.addTodo(this.state)
	}

	handleChange = event => {
		this.setState({
			text: event.target.value
		})
	}

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
					<div>
						<label for="task">Task: </label>
						<input type="text" id="task" placeholder="Enter a task to do..." value={this.state.text} onChange={this.handleChange} />
					</div>
					<input type="submit" />
				</form>
				{/* the following line just added to visually confirm that we are changing state */}
				{this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
	return{
		addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
	}
}

export default connect(null, mapDispatchToProps)(CreateTodo);
