import React, { Component } from 'react'
import {connect} from 'react-redux';

class CreateTodo extends Component {

    state = {
      text: ''
    }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: "ADD_TODO", payload: this.state})
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    )
  }
}


export default connect()(CreateTodo);
