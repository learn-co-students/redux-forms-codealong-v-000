export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state = {todos: state.todos.concat(action.todo.text) }
    default:
      return state  
  }
  return state;
}
