export default function manageTodo(state = {
  todos: [],
}, action) {

  switch(action.type){
    case "ADD_TODO":
      
      //If we're adding a to-do, concatenate it to the array already in the state
      //Reference the new to-do using the generic 'payload' object and the text key (since we know its a ADD_TODO call)
      return {todos: state.todos.concat(action.payload.text) };
    default:
      return state;
  }
}
