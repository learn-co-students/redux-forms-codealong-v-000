import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import createStore from './createStore';

//we create the store with a reducer
let store = createStore(manageTodo);

export function render(){
  ReactDOM.render(
    //we pass through the store as a prop to our app. Our App component passes the store as a prop down to the CreateTodo component.
    <App store={store} />,
    document.getElementById('root')
  );
};

store.dispatch({type: '@@INIT'});
