export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':

      console.log({ todos: state.todos.concat(action.info.text) });

      return { todos: state.todos.concat(action.info.text) };

    default:
      return state;
  }
}
