import React, { Component } from 'react'

class CreateTodo extends Component {

  // Note : Constructor for local state
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
   
  // Note : Function to handle input changing
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return(
    <div>
      <form>
        <p>
          <label>add todo</label>
          
          {/* Note : Need to use "this.handleChange.bind(this)" or "(event) => this.handleChange(event)" */}
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
        </p>
        <input type="submit" />
      </form>
      
      {/* Note : This is just for debugging purposes (so we know that the state is properly changing) */}
      {this.state.text}
    </div>
    );
  }
}

export default CreateTodo;
