import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo store={this.props.store} />
        <ul>
          {this.props.store.getState().todos.map((e, i) =>
            <li key={i}>{e}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
