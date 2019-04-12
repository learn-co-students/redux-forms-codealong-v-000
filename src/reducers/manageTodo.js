export default function manageTodo(state = {
  todos: [],
}, action) {

  switch(action.type) {

    case 'ADD_TODO':
      console.log({ todos: state.todos.concat(action.todo.text) });
      return { todos: state.todos.concat(action.todo.text) };
 
    default:
      return state;

  }
}
