import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write tests', completed: true },
    { id: 4, text: 'Master JavaScript', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

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

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = getFilteredTodos();
  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
          data-testid="todo-input"
        />
        <button type="submit" className="add-button" data-testid="add-button">
          Add Todo
        </button>
      </form>

      <div className="todo-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
          data-testid="filter-all"
        >
          All ({todos.length})
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
          data-testid="filter-active"
        >
          Active ({activeCount})
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
          data-testid="filter-completed"
        >
          Completed ({completedCount})
        </button>
      </div>

      <ul className="todo-list" data-testid="todo-list">
        {filteredTodos.map(todo => (
          <li key={todo.id} className="todo-item" data-testid={`todo-item-${todo.id}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
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

      {todos.length > 0 && (
        <div className="todo-footer">
          <div className="todo-stats">
            <span data-testid="total-count">Total: {todos.length}</span>
            <span data-testid="active-count">Active: {activeCount}</span>
            <span data-testid="completed-count">Completed: {completedCount}</span>
          </div>
          {completedCount > 0 && (
            <button 
              onClick={clearCompleted} 
              className="clear-completed"
              data-testid="clear-completed"
            >
              Clear Completed
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;