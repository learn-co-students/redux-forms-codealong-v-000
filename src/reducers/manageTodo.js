export default function manageTodo(
  state = {
    todos: []
  },
  action
) {
  switch (action.type) {
    case "ADD_TODO":
      console.log({ todos: state.todos.concat(action.todo.text) });
      return { ...state, todos: state.todos.concat(action.todo.text) };
  }

  console.log("reducer received this action:", action);

  return state;
}
