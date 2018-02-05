export default function manageTodo(state = {
  todos: [
    'buy groceries',
    'feed birds',
    'pay tax'
  ],
}, action) {

  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.todo.text) };
    default:
      return state;
  }
}
