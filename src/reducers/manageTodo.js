export default function manageTodo(state = {
  todos: [
    { text: 'buy groceries' },
    { text: 'watch netflix' }
  ],
}, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [action.todo, ...state.todos]
      }
    default:
      return state;
  }
}
