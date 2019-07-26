export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log({todos: state.todos.concat(action.playload.text) })
      return {todos: state.todos.concat(action.playload.text )}
    
    default:
      return state;
  }
}
