import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
    state = {
        text: ''
    };

    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.props.addTodo(this.state);
    // };

    // 1. alternate way of handleSubmit when connect does not use arguments
    // otherwise use above
    handleSubmit = event => {
       event.preventDefault();
       this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
   };

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <p>
                        <label>add todo</label>
                        < br/>
                        <input
                            type="text"
                            onChange={event => this.handleChange(event)}
                            value={this.state.text}
                        />
                    </p>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
// 2. this is not needed when connect() has no arguments
// const mapDispatchToProps = dispatch => {
//     return {
//         addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
//     };
// };

// connect with no arguments use handleSubmit above, returns dispatch as a prop
// to the component wrapping
export default connect()(CreateTodo)

// 3. connect with arguments see commented out handleSubmit/ mapDispatchToProps
// export default connect(null, mapDispatchToProps)(CreateTodo);
