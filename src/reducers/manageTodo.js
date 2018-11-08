export default function manageTodo(state = {
  todos: [],
}, action) {

  switch (action.type) {
    case 'ADD_TODO': 
      console.log({ todos: state.todos.concat(action.payload.text ) });

      // concat() joins two or more strings
      return { todos: state.todos.concat(action.payload.text) };
    default:
      return state;
  }
}


// 3 Main Steps:
// 1. Make sure React component of our app is working. By building a form, and then making sure that whenever user typed in the form's input, state was updated.
// 2. Connect the component to Redux and design mapDispatchToProps
// 3. Build reducer such that it responded to appropriate event and concatenated the payload into array of todos 