import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  const handleDelete = () => {
    deleteTodo();
  };

  const handleToggleComplete = () => {
    toggleComplete();
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span className="todo-text">{todo.text}</span>
      <div className="todo-actions">
        <button className="complete-btn" onClick={handleToggleComplete} type="button">
          {todo.completed ? <FontAwesomeIcon icon={faCheck} /> : <span>&#x2714;</span>}
        </button>
        <button className="delete-btn" onClick={handleDelete} type="button">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TodoItem;
