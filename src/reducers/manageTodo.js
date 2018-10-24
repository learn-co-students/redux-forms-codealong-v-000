export default function manageTodo(state = {
  todos: [],
}, action) {
  state = {
  todos: [
    { text: 'buy groceries' },
    { text: 'watch netflix' },
  ]
}
  switch (action.type) {
    case 'ADD_TODO':

      console.log({ todos: state.todos.concat(action.payload.text) });

      return { todos: state.todos.concat(action.payload.text) };

    default:
      return state;
  }
}
