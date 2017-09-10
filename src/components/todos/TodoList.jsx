import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  return (
    <ul className="list">
      {props.store.getState().todos.map((t,i)=><li key={i}>{t.text}</li>)}
    </ul>
  );
}

TodoList.defaultProps = {
  store: {}
}

TodoList.propTypes = {
  store: PropTypes.object
}

export default TodoList;