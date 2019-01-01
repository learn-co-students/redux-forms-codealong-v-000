export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  console.log(state)
  if (action.type == "ADD_TODO"){
    return { todos: state.todos.concat(action.payload) }
  } else {
    return state;
  }
}
