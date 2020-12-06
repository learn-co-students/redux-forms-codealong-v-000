
// ./src/components/todos/createTodo




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








let state = {
  todos: [
    {text: 'get groceries'},
    {text: 'go to the store'},
  ]
}
...


on submission of the form, we want to send the value we captured in the local state to
the store. mapDispatch is going to return an object with a function...the dispatch
part will include a type key and a payload.

mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch(type: 'ADD_TODO', payload: formData)
  }
}


.
making a controlled form


we want to make a
inside the CreateTodo component, we change our render function to the following ...

render(){
  return(
    <div>
      <form>
        <p>
          <label>add todo</label>
          <input type="text" onChange={(event) => this.handleChange(event)}/>
        </p>
        <input type="submit" />
      </form>
    </div>
  );
}

what does this code mean?




what would this look like visually in the browser?
render(){
  return(
    <div>
      <form>
        <p>
        <label>add todo</label>
        <input type="text"  />
        </p>
        <input type="submit"/>
      </form>
    </div>
  )
}
