import React, { Component } from 'react'

class CreateTodo extends Component {

  handleText = () => {

  }


  render() {
    return(
      <div>
      <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange{this.handleText} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
