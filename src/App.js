import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import ShowTodo from './components/todos/ShowTodo'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
        <ShowTodo />
      </div>
    );
  }
}

export default App;
