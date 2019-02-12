import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      text: " "
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    //console.log('a')
  }

  handleSubmit = e => {
    //console.log('b')
    e.preventDefault();
    //console.log('c')
    this.props.addTodo(this.state)
    //console.log('d')
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo:</label>
            <input type="text" name="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
            <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}
  const mapDispatchToProps = dispatch => {
    return {
      addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })  
      }
  }

export default connect(null, mapDispatchToProps)(CreateTodo);


//connect will return dispatch as a prop to the component we're wrapping with connect. 
//So an alternative way to write:
// handleSubmit = event => {
//   event.preventDefault();
//   this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
// };
//export default connect()(CreateTodo);