import React from 'react';

const Todos = (props) => {
    const todos = props.todos.map((todo, idx) => <li key={idx}>{todo}</li> )

    return (
        <div>
            <ul>
                {todos}
            </ul>
        </div>
    )
}

export default Todos;