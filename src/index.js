import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import createStore from './createStore';

//create the store with a reducer
let store = createStore(manageTodo);

/*
pass through the store as a prop to the app
it passes the store as a prop down to the CreateTodo component
call this.props.store.dispatch({ type: 'ADD_TODO', todo: this.state })
on submit and send the store with the component's state
*/
export function render(){
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

store.dispatch({type: '@@INIT'});
