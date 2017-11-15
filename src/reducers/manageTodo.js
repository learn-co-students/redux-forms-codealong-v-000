export default function manageTodo(state = {
  todos: [],
}, action) {

  switch (action.type){
    case 'ADD_TODO':
    let todo = "// <user entered text>"
    //get user input text
    //assign to variable 'todo:'
    //use variable to pass to store
    //return updated state
debugger
    state = state.todos, { 
        todo: todo,
      }
    return state 

    default: 
    return state;
  }
}
