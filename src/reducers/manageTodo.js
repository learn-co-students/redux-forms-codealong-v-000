state = {
  todos: [
    { text: 'buy groceries' },
    { text: 'watch netflix' },
  ]
}


export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.todo.text) };

    default:
      return state;
  }
}
