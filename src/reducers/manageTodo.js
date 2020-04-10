const defaultState = {
  todos: [{ text: "buy groceries" }, { text: "watch netflix" }],
};

export default function manageTodo(state = defaultState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: state.todos.concat(action.payload.text) };
    default:
      return state;
  }
}
