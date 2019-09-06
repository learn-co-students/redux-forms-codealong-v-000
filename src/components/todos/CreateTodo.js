import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
    state = {
      text: ''
    }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  // handleSubmit = event => {
  //       event.preventDefault();
  //       this.props.addTodo(this.state);
  //   };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch({type: 'ADD_TODO', payload: this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </p>
            <input type="submit"/>
        </form>
          {this.state.text}
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//       addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})
//   }
// }

// export default connect(null, mapDispatchToProps)(CreateTodo);

// if there is no parameter listed for connect, it automatically dispatches to the Store
// you need to make sure your handleSubmit function passes that dispatch params
export default connect()(CreateTodo)
