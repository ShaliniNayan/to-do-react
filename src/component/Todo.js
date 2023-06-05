import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoText) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now().toString(),
        text: todoText,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleAddTodo = (event) => {
    if (event.key === 'Enter') {
      const updatedValue = event.target.value;
      addTodo(updatedValue);
      // event.target.value = '';
    }
  };

  return (
    <div className="todos-logic">
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Add Todo"
          onKeyPress={handleAddTodo}
        />
        <button
          className="add-button"
          onClick={() => {
            const input = document.querySelector('.input');
            if (input.value) {
              addTodo(input.value);
              input.value = '';
            }
          }}
          type="button"
        >
          +
        </button>
      </div>
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
};

export default Todo;
