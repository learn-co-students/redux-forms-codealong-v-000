import React, { Component } from 'react'
import { connect } from 'react-redux';
import { checkOff } from '../../actions/actions'

class DisplayTodos extends Component {

    // local state
    state = {
        completed: false,
    }

    handleCheck = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // Handle check event locally
        this.setState({
            [name]: value
        });

        // Update the store

    }

    render() {
        console.log("In display todos, the props are: ", this.props)
        let todos = this.props.todos 
            ? 
            this.props.todos.map(todoItem => (
                    <li key={todoItem.id} >
                        <input name={todoItem.id} type="checkbox"/> {todoItem.todoText}
                    </li>
            ))
            : 
            null
        
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}
            
const mapStateToProps = (state) => {
    return { todos: state }
}
            
export default connect(mapStateToProps, { checkOff })(DisplayTodos)
