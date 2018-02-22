import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* component passes the store as prop down to CreateTodo component*/}
        <CreateTodo store={this.props.store} />
      </div>
    );
  }
}

export default App;
