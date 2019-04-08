import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
      text: ''
    }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // this.props.addTodo(this.state) OR
    // leave out of connect & mapDispatchTo... and place the dispatch code here
    this.props.dispatch({
      type: 'ADD_TODO', payload: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
//     }
// }

// export default connect(null, mapDispatchToProps)(CreateToDo)
export default connect()(CreateTodo)
