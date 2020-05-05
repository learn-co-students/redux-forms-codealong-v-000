import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateTodo from './components/todos/CreateTodo'
import ToDos from './components/ToDos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo dispatch={this.props.dispatch} />
        <ToDos todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);
