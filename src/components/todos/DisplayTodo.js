import React from 'react'
import {connect} from 'react-redux'

function Todos(props) {
  return (
    <div>
      <h1>My todos:</h1>
      {/* {props.todos} */}
      <ul>
        {props.todos.map(todo=> <li>{todo.todo}</li>)}
      </ul>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps)(Todos)
