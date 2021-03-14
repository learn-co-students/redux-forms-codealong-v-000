
export default function manageTodo(
    state = {
     todos: [],
        }, action) {
              switch (action.type) {
                  case 'ADD_TODO':
                
                console.log({ todos:
                    state.todos.concat(action.payload.text)
      });
      return { todos: state.todos.concat(action.payload.text) };
     
    default:
      return state;
  }
}

 /*
 Ok, once you change the manageTodo() reducer to the above function,
  open up the console in your browser, and try clicking the submit button a few times.
  The log will show that our reducer is concatenating new
   values every time the form is submitted!
 */