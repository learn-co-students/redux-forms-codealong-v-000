export default function manageTodo(state = {
  //initial state should be an empty list of todos
  //concatenate a new todo each time we receive an action
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.todo.text) }
  default:
    return state
  }
}
