import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import createStore from './createStore';

let store = createStore(manageTodo);

export function render(){
  ReactDOM.render(
    <App store={store} />, //passing the store as prop to App
    document.getElementById('root')
  );
};

store.dispatch({type: '@@INIT'});
