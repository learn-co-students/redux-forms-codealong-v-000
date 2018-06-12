// TN: THIS IS THE REDUCER, WHREE THE ACTIONS ARE DEFINED.  THE STATE= ON LINE 3
// IS JUST TO SET A DEFAULT FOR THE STATE

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


// export default function manageTodo(state = {
//   todos: [],
// }, action) {
//   return state;
// }
