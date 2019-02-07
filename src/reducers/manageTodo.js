export default function manageTodo(state = {
  todos: [],
}, action) {  

  switch(action.type){

    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload]
      }
    
    default: 
      return state
  }

  return state;
}
