import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit({type: 'ADD_TODO', todo: this.state})
  };


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" value={this.state.text} onChange={this.handleChange}/>
          </p>
          <input type="submit" value="submit" />
        </form>
        {this.state.text}
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submit: (action) => {dispatch(action)}
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
