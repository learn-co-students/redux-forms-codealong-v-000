import React, { Component } from 'react';
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor() {
  	super();

  	this.state = {
  		text: ''
  	};
  }

  handleChange = e => {
  	this.setState({
  		text: e.target.value
  	});
  };

  handleSubmit = event => {
  	event.preventDefault();
  	this.props.dispatch({
  		type: 'ADD_TODO',
  		payload: this.state
  	})
  }

  render() {
    return(
      <div>
        <form
        	onSubmit={ event => this.handleSubmit(event) }>
        	<p>
        		<label>add todo</label>
        		<input
        			type="text"
        			value={this.state.text}
        			onChange={this.handleChange} />
        	</p>
        	<input type="submit"/>
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default connect()(CreateTodo);
