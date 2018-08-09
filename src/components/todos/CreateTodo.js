import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch({type: "ADD_TODO",
  payload: this.state })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add ToDo</label>
            <input type="text"
            onChange={this.handleChange}
            value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

// mapDispatchToProps = dispatch => {
//   return {
//     addToDo: (formData) => dispatch(<some action>)
//   }
// }

// mapDispatchToProps = dispatch => {
//    return {
//      addToDo: (formData) => dispatch({type: "ADD_TODO", payload: formData})
//    }
//  }

// export default connect(null, mapDispatchToProps)(CreateTodo);

export default connect()(CreateTodo)
