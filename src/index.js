import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import createStore from './createStore';


  // THIS IS KEY TOO -- WHERE STORE IS CREATED
let store = createStore(manageTodo);

export function render(){
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

store.dispatch({type: '@@INIT'});
