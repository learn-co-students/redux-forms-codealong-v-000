import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import createStore from './createStore';

const store = createStore(manageTodo);

export function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

store.dispatch({type: '@@INIT'});
