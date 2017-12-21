import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import createStore from './createStore';

let store = createStore(manageTodo); //created the store with the reducer manageTodo

export function render(){
  ReactDOM.render(
    <App store={store} />,//pass through store as a prop so on submit we can call this.props.store.dispatch(....)
    document.getElementById('root')
  );
};

store.dispatch({type: '@@INIT'});
