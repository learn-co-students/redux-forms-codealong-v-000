export default function manageTodo(
  state = {
    todos: []
  },
  action
) {
  switch (action.state) {
    case "ADD_TODO":
      return { todos: state.todos.concat(action.payload.todo) };
  }

  console.log("reducer received this action:", action);

  return state;
}
