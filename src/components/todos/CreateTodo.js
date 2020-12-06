import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor(){
    super();
    this.state = {
      text: '',
    };
  }

  // handleChange(event) {
  //   this.setState({
  //     text: event.target.value
  //   });
  // }

  handleChange = (event) => {
      this.setState({
        text: event.target.value
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            // <input type="text" onChange={(event) => this.handleChange(event)} />
            //
            // we can use this shorter version of onChange now that we use an arrow
            // function for the handleChange function. (why?)
            <input type="text" onChange={event => this.handleChange(event)} value={this.state.text}/>

          </p>
            <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({type: "ADD_TODO", payload: formData})
  }
}


export default connect(null, mapDispatchToProps)(CreateTodo);
