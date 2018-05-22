import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import createStore from './createStore';

// create the store with a reducer
let store = createStore(manageTodo);

// the store is passed through as a prop to our app
// App component passes down the store as a prop to the CreateTodo component
export function render(){
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

store.dispatch({type: '@@INIT'});
