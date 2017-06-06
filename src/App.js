import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo store={this.props.store} />
        <h3>To Do:</h3>
          <ul>
            {this.props.store.getState().todos.map((item, index) =>
            <li key={index}>{item}</li>
          )}
          </ul>
      </div>
    );
  }
}

export default App;
