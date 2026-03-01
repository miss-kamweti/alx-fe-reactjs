import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write tests', completed: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Add todo function
  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // Toggle todo function
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo function
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      
      {/* AddTodoForm */}
      <form onSubmit={addTodo} className="todo-form" data-testid="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
          data-testid="todo-input"
        />
        <button type="submit" className="add-button" data-testid="add-button">
          Add Todo
        </button>
      </form>

      {/* Todo List */}
      <ul className="todo-list" data-testid="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item" data-testid={`todo-item-${todo.id}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="todo-checkbox"
              data-testid={`todo-checkbox-${todo.id}`}
            />
            <span 
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
              onClick={() => toggleTodo(todo.id)}
              data-testid={`todo-text-${todo.id}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
              data-testid={`delete-button-${todo.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Todo Stats */}
      <div className="todo-stats" data-testid="todo-stats">
        <p>Total: {todos.length}</p>
        <p>Completed: {todos.filter(t => t.completed).length}</p>
        <p>Pending: {todos.filter(t => !t.completed).length}</p>
      </div>
    </div>
  );
};

export default TodoList;