import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'

class App extends Component {
  render() {
    const todos = this.props.store.getState().todos; 
    return (
      <div className="App">
        <CreateTodo store={this.props.store} />
        <ul>
          {todos.map(function(todo) {
            return <li>{todo}</li>;   
            })
          }
       </ul>
      </div>
    );
  }
}

export default App;
