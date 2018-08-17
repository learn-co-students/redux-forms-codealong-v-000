// ./src/reducers/manageTodo.js
 
export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
 
      console.log({ todos: state.todos.concat(action.payload.text) });
 
      return { todos: state.todos.concat(action.payload.text) };
 
    default:
      return state;
  }
}
// upon submission, we want to dispatch the following action to the store:
// {
//   type: 'ADD_TODO',
//   todo: buygrocieries (or any example)
// 

// Before starting, this is the concept behind forms in React
// When the user clicks the submit button, we want to grab that initial state
// we want to call store.dispatch({type: 'ADD_TODO', todo: this.state})