import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
    };
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          </p>
            <label>Add ToDo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(connectCreateTodo);
