import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import { connect } from 'react-redux'

class App extends Component {
  render() {

    const todos = this.props.todos.map(td => <li>{td}</li>)

    return (
      <div className="App">
        <CreateTodo />
        <ul>
          {todos}
        </ul>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    todos: state.todos
  }
)

export default connect(mapStateToProps)(App);
