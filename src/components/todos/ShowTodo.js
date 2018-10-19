import React, { Component } from 'react'
import { connect } from 'react-redux';


class ShowTodo extends Component {

  showList = () => {
    return this.props.todos.map(function (todo) {
      return <li key={todo}>{todo}</li>
    })
  }

  render() {
    return(
      <div>
        <h2>Todo List:</h2>
          <ol>
          {this.showList()}
          </ol>
      </div>
    )
  }
}

  let stateProps = (state) => {
    return {todos: state.todos}
  }

export default connect(stateProps)(ShowTodo);
