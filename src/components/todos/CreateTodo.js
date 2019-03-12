import React, { Component } from 'react'
import {connect} from "react-redux"

class CreateTodo extends Component {
	
  state = {
  	text: ""
  }

  handleChange = event => {
  	this.setState({
  		text: event.target.value
  	})
  }

  handleSubmit = event => {
  	event.preventDefault()
  	this.props.addTodo(this.state)
  }
  // * ALTERNATIVE handleSubmit*
  // * If not given any arguments, connect will return dispatch 
  // * as a prop to the component we're wrapping with connect

  // handleSubmit = event => {
  // 	event.preventDefault()
  // 	this.props.dispatch({type: "ADD_TODO", payload: this.state})
  // }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
        	<p>
        		<label>Add todo: </label>
        		<input 
        			type="text" 
        			onChange={this.handleChange} 
        			value={this.state.text} 
        		/>
        	</p>
        	<input type="submit" />
        </form>
        {/* 
	        Make sure that whenever the user types
			in the form input, the state is updated
		*/}
        {/* {this.state.text} */}
      </div>
    )
  }
}
// Design mapDispatchToProps
const mapDispatchToProps = dispatch => {
	return {
		addTodo: formData => dispatch({type: "ADD_TODO", payload: formData})
	}
}
// Connect the component to Redux
export default connect(
	null, 
	mapDispatchToProps
)(CreateTodo)
// * ALTERNATIVE connect*
// * If not given any arguments, connect will return dispatch 
// * as a prop to the component we're wrapping with connect

// export default connect()(CreateTodo)
