// * First, make sure the React component of the application is working by 
//   building a form, and then making sure that whenever the user types 
//   in the form's input, the state is updated (todos/CreateToDo.js).
// * Second, connect the component to Redux and design mapDispatchToProps (todos/CreateToDo.js)
// * Third, build the reducer such that it responded to the appropriate event, and 
//   concatenate the payload into the array of todos (reducers/manageTodo.js).

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import manageTodo from './reducers/manageTodo'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(manageTodo) // Reducer

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
