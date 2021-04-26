import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../actions/index'

class CreateTodo extends Component {
  state = {
    todo: ""
  }
  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={event=> {event.preventDefault(); this.props.addTodo(this.state); this.setState({todo: ""})}}>
          <p>
            <label>add todo:</label>
            <input type="text" value={this.state.todo} onChange={e=> this.setState({todo: e.target.value})}/>
            <input type="submit" />
          </p>
        </form>
      </div>
    )
  }
}

export default connect(null, {addTodo})(CreateTodo);
