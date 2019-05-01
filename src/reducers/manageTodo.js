// manageTodo reduces the state and an action to a
// new state, which it returns. The new state contains
// any modifications to the old state.
export default function manageTodo(state=[], action) {
	let idx
	switch (action.type) {
		case "ADD_TODO": 
			// Append a new todo item to the state
			// The todo item is passed into addTodo
			// and is accessed with action.todo
			return [...state, action.todo]
			
		case "DEL_TODO":
			idx = state.indexOf(action.todo.id)
			// Splice out a todo item to be removed 
			return [...state.splice(0,idx), ...state.splice(idx+1)]
		
		case "CHECK_OFF":
			// Find the correct todo item and change
			// its completed value to true 
			return state.map(todoItem => {
				if(todoItem.id === action.id) {
					todoItem.completed = true
				}
			})

		default:
			return state;
	}
}
