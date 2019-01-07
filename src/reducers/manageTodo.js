export default function manageTodo(state = {
  todos: [
    { text: 'buy groceries' },
    { text: 'watch netflix' },
  ]
}, action) {

  console.log("reducer received this action:", action);

  return state;
}
