import React from 'react'
import { connect } from 'react-redux'

class Todos extends React.Component {

    render(){
        // let todos = this.props.todos.map((todo, id) => <li key={id}>{todo}</li>)
        return(
            <div>
                Todos
                <ul>
                {this.props.todos.map((todo, id) => <li key={id}>{todo}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({todos: state.todos})

export default connect(mapStateToProps)( Todos )
