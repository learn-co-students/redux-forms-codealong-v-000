import { render } from './index.js'

export default function createStore(reducer){
  let state;

  function dispatch(action){
    state = reducer(state, action);
    console.log(`the action is`, action);
    console.log(`the state is`, state);
    render();
  };

  function getState(){
    return state;
  };

  return {
    dispatch,
    getState
  };
};
