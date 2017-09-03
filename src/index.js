import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import createStore from './createStore';

let store = createStore(manageTodo);

constructor() {
  super();
  this.state = {
    text: '',
  };
}

render(){
  return(
    <div>
      <form>
        <p>
          <label>add todo</label>
          <input type="text" onChange={(event) => this.handleChange(event)}/>
        </p>
        <input type="submit" />
      </form>
      {this.state.text}
    </div>
  );
}

handleChange(event) {
  this.setState({
    text: event.target.value
  });
};


store.dispatch({ type: '@@INIT' });
