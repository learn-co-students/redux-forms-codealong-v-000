//always provide an initial state as argument
export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
    // concatenate a new todo each time we receive an action ADD_TODO
      return { todos: state.todos.concat(action.todo.text) };
      // - or - return { todos: [...state.todos, action.todo.text] };
 
    default:
      return state;
  }
}

