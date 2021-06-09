export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log("reducer received this action:", action);
  switch (action.type){
    case 'ADD_TODO':
    //  console.log({ todos: state.todos.concat(action.payload.text) });
      console.log(action);

      console.log(state.todos);
      return { todos: state.todos.concat(action.payload.text) };
 
  

  return state;
 } 
}
