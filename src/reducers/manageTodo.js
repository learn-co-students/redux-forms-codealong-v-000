export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.todo.text)}
    case 'REMOVE_TODO':
      const indexTodo = state.todos.indexOf(action.todo);
      return {todos: [
        ...state.todos.slice(0, indexTodo),
        ...state.todos.slice(indexTodo + 1)
      ]}

    default:
      return state
  }
}
