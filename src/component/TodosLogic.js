import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosLogic = ({ todos, deleteTodo, toggleComplete }) => (
  <div className="todos-logic">
    <ul className="todos-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={() => deleteTodo(todo.id)}
          toggleComplete={() => toggleComplete(todo.id)}
        />
      ))}
    </ul>
  </div>
);

TodosLogic.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TodosLogic;
