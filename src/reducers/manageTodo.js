export default function manageTodo(state = {
  todos: [],
}, action) {
  switch(action.type) {
    case 'ADD_TODO':
      // console.log({ todos: state.todos.concat(action.payload) });
      console.log({ // This works, too, and may be better. But, that may require an explanation in the README.
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      })

      return { todos: state.todos.concat(action.payload) };
    
    default:
      return state;
  }

  // console.log("reducer received this action:", action);

  // return state;
}
