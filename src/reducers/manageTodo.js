let initState = {
  todos: [],
};

export default function manageTodo(state = initState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log({ todos: state.todos.concat(action.payload.text) })
      return { todos: state.todos.concat(action.payload.text) };
    default:
      return state;
  }
}
