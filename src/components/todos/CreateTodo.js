import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
 
  state = {
    text: ''
  }

  handleSumbit = (e) => {
    e.preventDefault()
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
    this.setState({text: ''})
  }

  render() {
    console.log(this.state);
    
    return(
      <div>
        <form onSubmit={this.handleSumbit}>
          <p>
            <label>add todo</label>
            <input type='text' onChange={(e) => this.setState({text: e.target.value})} value={this.state.text}/>
          </p>
          <input type='submit'/>
        </form>
        <div>{this.state.todo}</div>
      </div>
    )
  }
}



export default connect()(CreateTodo);
