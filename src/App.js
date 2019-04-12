import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import Todo from './components/todos/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
        <Todo/>
      </div>
    );
  }
}

export default App;
