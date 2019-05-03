// The addTodo action
// A todo item is passed into addTodo. addTodo
// then returns an action object containing the
// action type and the todo item object.
export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}

// The delTodo action
// A todo item id is passed into delTodo.
// delTodo then returns an action object
// containing the action type and id.
export const delTodo = (id) => {
    return {
        type: 'DEL_TODO',
        id
    }
}

// The checkOff action
// A todo item id is passed into checkOff.
// checkOff then returns an action object
// containing the action type and id.
export const checkOff = (id) => {
    return {
        type: 'CHECK_OFF',
        id
    }
}